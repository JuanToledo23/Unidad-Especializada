import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService, LoaderService } from 'dls';
import { CaseService } from 'core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export interface Catalogue {
  key: number;
  value: string;
  generateGroup: string;
}

export interface CaseHeader {
  requestType: string;
  condusefFolio?: string;
  caseId: number;
  analyst: string;
  analystId: number;
}

export interface OriginOfClaim {
  requestType: string;
  condusefFolio?: string;
  arrivalMean: string;
  arrivalDate: string;
  endDate: string;
  totalCareDays: number;
  hall?: string;
  statusId: number;
}

export interface ClientDetails {
  name: string;
  address_1: string;
  address_2: string;
  address_3: string;
  curp: string;
  phoneNumber: string;
  email: string;
}

export interface RequestCause {
  accountNumber: string;
  branch: string;
  businessUnitId: number;
  cardNumber: string;
  cause: CatalogueElement[];
  causeCaseId: number;
  causeId: number;
  channel: CatalogueElement[];
  channelId: number;
  comments: string;
  opinion: string;
  productType: CatalogueElement[];
  productTypeId: number;
  reclaimedAmount: number;
  searchType: SearchType;
  subsidizedAmount: number;
  tradeName: CatalogueElement[];
  tradeNameId: number;
  txsNumber: number;
  uniqueClient: string;
}

export interface SearchType {
  label: string;
  value: string;
}

export interface Conclusions {
  comments: string;
  opinionId: number;
  reasonId: number;
}

export interface CatalogueElement {
  key: number;
  value: string;
  generateGroup: string;
}

@Component({
  selector: 'pages-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit, AfterViewInit {

  causesLenght: number;

  loading: boolean;

  caseForm: FormGroup;

  caseHeader: CaseHeader;

  originOfClaim: OriginOfClaim;

  clientDetails: ClientDetails;

  conclusions: Conclusions;

  panelOpenState = false;

  statusCatalogue: Catalogue[];

  business: Catalogue[];

  opinionsCatalogue: Catalogue[];

  reasonsCatalogue: Catalogue[];

  causes: RequestCause[];

  constructor(
    private ac: ActivatedRoute,
    private loader: LoaderService,
    private caseService: CaseService,
    public headerService: HeaderService,
    private fb: FormBuilder) {

    this.initCaseHeader();
    this.initOriginOfClaim();
    this.initClientDetails();

    this.statusCatalogue = [];
    this.opinionsCatalogue = [];
    this.reasonsCatalogue = [];

    this.causes = [];
    this.causesLenght = 0;

    this.caseForm = fb.group({
      caseId: '',
      claimOriginStatus: '',
      descriptionOfTheProblem: fb.array([]),
      clarificationInfo: fb.group({
        clarificationId: '',
        status: '',
        opinion: '',
        reclaimedAmount: ''
      }),
      conclusions: fb.group({
        opinionId: '',
        reasonId: '',
        comments: ''
      })
    });
  }

  ngOnInit(): void {
    if (this.ac.snapshot.params.caseId) {
      const caseId = this.ac.snapshot.params.caseId;
      this.loader.setLoader(true);
      this.caseService.gatCase(caseId).subscribe(cse => {
        this.loader.setLoader(false);
        console.log('Caso a pintar:', (cse));

        this.caseForm.get('caseId').setValue( parseInt(caseId, 10));

        const cseInfo = cse.respuesta.responseInfo.newCaseInfo;
        this.createCauses(cseInfo.causes);

        this.caseHeader = cseInfo.caseHeader;
        this.originOfClaim = cseInfo.claimOrigin;
        this.caseForm.get('claimOriginStatus').setValue(this.originOfClaim.statusId);

        this.clientDetails = cseInfo.clientDetails;
        this.conclusions = cseInfo.conclusions;

        this.caseForm.get('clarificationInfo').get('status').setValue(cseInfo.clarificationInfo.status);
        this.caseForm.get('clarificationInfo').get('opinion').setValue(cseInfo.clarificationInfo.opinion);
        this.caseForm.get('clarificationInfo').get('reclaimedAmount').setValue(cseInfo.clarificationInfo.reclaimedAmount);
        this.caseForm.get('clarificationInfo').get('clarificationId').setValue(cseInfo.clarificationInfo.clarificationId);

        this.caseForm.get('conclusions').get('opinionId').setValue(this.conclusions.opinionId);
        this.caseForm.get('conclusions').get('reasonId').setValue(this.conclusions.reasonId);
        this.caseForm.get('conclusions').get('comments').setValue(`${this.conclusions.comments}`);

        this.causes = cseInfo.causes;

        this.statusCatalogue = this.setCatalogues('status', cse);
        this.business = this.setCatalogues('business', cse);
        this.opinionsCatalogue = this.setCatalogues('opinion', cse);
        this.reasonsCatalogue = this.setCatalogues('reason', cse);
      });
    }
  }

  setCatalogues(catalogue: string, cse: any): CatalogueElement[] {
    try {
      switch (catalogue) {
        case 'business':
          return cse.respuesta.catalogues.business.catalogueElement;
        case 'status':
          return cse.respuesta.catalogues.status.catalogueElement;
        case 'opinion':
          return cse.respuesta.catalogues.opinion.catalogueElement;
        case 'reason':
          return cse.respuesta.catalogues.reason.catalogueElement;
        default:
          return [];
      }
    } catch (e) {
      return [];
    }
  }

  createCauses(causes: RequestCause[]): void {
    this.causesLenght = causes.length;
    console.log('Numero de catalogos::', this.causesLenght);
    causes.forEach((cause, idx) => {
      this.addCause(this.fb.group({
        causeId: [''],
        business: [''],
        productType: [''],
        tradeName: [''],
        channel: [''],
        cause: [''],
        reclaimedAmount: [''],
        subsidizedAmount: [''],
        txsNumber: [''],
        opinion: [''],
        comments: ['']
      }));
      this.fillCause(cause, idx);
    });
  }

  addCause(cause: FormGroup) {
    const causes = this.caseForm.get('descriptionOfTheProblem') as FormArray;
    causes.push(cause);
  }

  fillCause(cause: RequestCause, idx: number): void {
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('causeId').setValue(cause.causeCaseId);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('business').setValue(cause.businessUnitId);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('productType').setValue(cause.productTypeId);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('tradeName').setValue(cause.tradeNameId);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('channel').setValue(cause.channelId);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('cause').setValue(cause.causeId);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('reclaimedAmount').setValue(cause.reclaimedAmount);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('subsidizedAmount').setValue(cause.subsidizedAmount);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('txsNumber').setValue(cause.txsNumber);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('opinion').setValue(cause.opinion);
    this.caseForm.get('descriptionOfTheProblem').get(`${idx}`).get('comments').setValue(cause.comments);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Consulta';
    });
  }

  private initCaseHeader(): void {
    this.caseHeader = {
      requestType: '',
      condusefFolio: '',
      caseId: null,
      analyst: '',
      analystId: null
    };
  }

  private initOriginOfClaim() {
    this.originOfClaim = {
      requestType: '',
      condusefFolio: '',
      arrivalMean: '',
      arrivalDate: '',
      endDate: '',
      totalCareDays: null,
      hall: '',
      statusId: null,
    };
  }

  private initClientDetails() {
    this.clientDetails = {
      name: '',
      address_1: '',
      address_2: '',
      address_3: '',
      curp: '',
      phoneNumber: '',
      email: ''
    };
  }

  getField(field: string) {
    return this.caseForm.get(field).value;
  }

  onSubmit() {
    this.loader.setLoader(true);
    console.log('PETICION DE ACTUALIZACION',  JSON.stringify( this.caseForm.value ));
    this.caseService.updateCase(this.caseForm.value).subscribe(() => this.loader.setLoader(false));
    console.log('Formulario lleno', this.caseForm.value);
  }
}
