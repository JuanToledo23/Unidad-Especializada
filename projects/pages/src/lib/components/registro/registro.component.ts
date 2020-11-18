import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { CaseService, CatalogueElement } from 'core';
import { HeaderService, LoaderService, AclaracionesService } from 'dls';

@Component({
  selector: 'pages-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements AfterViewInit, OnInit {

  clarifications: any;

  arrivalMeansCatalogue: CatalogueElement[];
  requestTypeCatalogue: CatalogueElement[];
  statusCatalogue: CatalogueElement[];
  stateCatalogue: CatalogueElement[];

  formCaseRegistry: FormGroup;

  formSerchType: FormGroup;

  panelOpenState: boolean;

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    public headerService: HeaderService,
    private loader: LoaderService,
    private as: AclaracionesService,
    private caseService: CaseService) {

    this.panelOpenState = false;

    this.formSerchType = this.fb.group({
      searchField: ['01841300256843']
    });

    this.formCaseRegistry = this.fb.group({
      OriginOfClaim: this.fb.group({
        requestId: ['-1'],
        condusefFolio: [{ value: '', disabled: true }],
        arrivalMeanId: ['-1'],
        totalCareDays: [{ value: '', disabled: true }],
        arrivalDate: [''],
        endDate: [''],
        hall: [{ value: '', disabled: true }],
        statusId: ['-1']
      }),
      clientInformation: this.fb.group({
        clientName: [''],
        clientPaternalName: [''],
        clientMaternalName: [''],
        claimantName: [''],
        claimantPaternalName: [''],
        claimantMaternalName: [''],
        streetName: [''],
        streetNumber: [''],
        interiorNumber: [''],
        postalCode: [''],
        suburb: [''],
        estate: [''],
        town: [''],
        rfcCurp: [''],
        phoneNumber: [''],
        email: [''],
      }),
      clarificationInfo: this.fb.group({
        clarificationId: { value: '', disabled: true },
        status: '',
        opinion: '',
        reclaimedAmount: ''
      }),
    });
  }

  ngOnInit(): void {
    this.loader.setLoader(true);
    this.as.clarificationBinded$.subscribe( data => {
      this.formCaseRegistry.get('clarificationInfo').get('clarificationId').setValue(data.clarificationId);
      this.formCaseRegistry.get('clarificationInfo').get('status').setValue(data.status);
      this.formCaseRegistry.get('clarificationInfo').get('opinion').setValue(data.opinion);
      this.formCaseRegistry.get('clarificationInfo').get('reclaimedAmount').setValue(data.reclaimedAmount);
      this.loader.setLoader(false);
    });

    this.loader.setLoader(true);
    this.caseService.getCaseToRegistry().subscribe((data: any) => {
      this.requestTypeCatalogue = data.respuesta.catalogues.requestType.catalogueElement;
      this.arrivalMeansCatalogue = data.respuesta.catalogues.arrivalMeans.catalogueElement;
      this.statusCatalogue = data.respuesta.catalogues.status.catalogueElement;
      this.stateCatalogue = data.respuesta.catalogues.estate.catalogueElement;
      this.loader.setLoader(false);
    });
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Registro';
    });
  }

  goConsulta() {
    if (this.formSerchType.value === '') { return; }
    this.loader.setLoader(true);
    this.caseService.getClientInformation(this.formSerchType.value).subscribe(
      data => {
        this.loader.setLoader(false);
        console.log('getClientInformation RESUELVE:: ', data);

        this.fillClientInfo(data);
        this.fillClarifications(data);
      });
  }

  fillClarifications(data: any) {
    this.as.setClarificatiosn(data.respuesta.responseInfo.clarifications);
  }

  fillClientInfo(data: any) {
    if (data.respuesta.responseInfo.personal.rfc !== '') {
      this.formCaseRegistry.get('clientInformation').get('rfcCurp')
        .setValue(data.respuesta.responseInfo.personal.curp);
    } else {
      this.formCaseRegistry.get('clientInformation').get('rfcCurp')
        .setValue(data.respuesta.responseInfo.personal.rfc);
    }

    this.formCaseRegistry.get('clientInformation').get('clientName')
      .setValue(data.respuesta.responseInfo.personal.clientName);
    this.formCaseRegistry.get('clientInformation').get('clientPaternalName')
      .setValue(data.respuesta.responseInfo.personal.clientPaternalName);
    this.formCaseRegistry.get('clientInformation').get('clientMaternalName')
      .setValue(data.respuesta.responseInfo.personal.clientMaternalName);
    this.formCaseRegistry.get('clientInformation').get('phoneNumber')
      .setValue(data.respuesta.responseInfo.personal.phoneNumber);
    this.formCaseRegistry.get('clientInformation').get('email')
      .setValue(data.respuesta.responseInfo.personal.email);

    this.formCaseRegistry.get('clientInformation').get('streetName')
      .setValue(data.respuesta.responseInfo.personal.address.streetName);
    this.formCaseRegistry.get('clientInformation').get('streetNumber')
      .setValue(data.respuesta.responseInfo.personal.address.streetNumber);
    this.formCaseRegistry.get('clientInformation').get('interiorNumber')
      .setValue(data.respuesta.responseInfo.personal.address.interiorNumber);
    this.formCaseRegistry.get('clientInformation').get('postalCode')
      .setValue(data.respuesta.responseInfo.personal.address.postalCode);
    this.formCaseRegistry.get('clientInformation').get('suburb')
      .setValue(data.respuesta.responseInfo.personal.address.suburb);
    this.formCaseRegistry.get('clientInformation').get('estate')
      .setValue(data.respuesta.responseInfo.personal.address.estate);
    this.formCaseRegistry.get('clientInformation').get('town')
      .setValue(data.respuesta.responseInfo.personal.address.town);
  }

  resetClientInformation() {
    this.formCaseRegistry.get('clientInformation').reset();
  }

  sendData() {
    console.log('Enviando información:: ', this.formCaseRegistry.value);
  }
}
