import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'dls';
import { CaseService } from 'core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';


export interface Catalogue {
  key: number,
  value: string,
  generateGroup: string
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
  status: number;
}

export interface clientDetails {
  name: string;
  address: {
    section1: string;
    section2: string;
    section3: string;
  }
  curp: string;
  phoneNumber: string;
  email: string;
}

export interface Cause {

}


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit, AfterViewInit {

  caseForm: FormGroup;

  caseHeader: CaseHeader;

  originOfClaim: OriginOfClaim;

  clientDetails: clientDetails;

  panelOpenState = false;

  statusCatalogue: Catalogue[];

  business: Catalogue[];

  opinionsCatalogue: Catalogue[];

  reasonsCatalogue: Catalogue[];

  causes;

  constructor(
    private ac: ActivatedRoute,
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

    this.caseForm = fb.group({
      'claimOriginStatus': '',
      'descriptionOfTheProblem': fb.array([]),
      'clarificationInfo': fb.group({
        'clarificationId': '',
        'status': '',
        'opinion': '',
        'reclaimedAmount': ''
      }),
      'conclusions': fb.group({
        'opinionId': '',
        'reasonId': '',
        'comments': ''
      })
    })
  }

  ngOnInit(): void {
    if (this.ac.snapshot.params.caseId) {
      const caseId = this.ac.snapshot.params.caseId;
      this.caseService.gatCase(caseId).subscribe(cse => {
        console.log('Caso a pintar:', (cse));

        const cseInfo = cse.respuesta.responseInfo.newCaseInfo;

        this.createCauses(cseInfo.causes);

        this.caseHeader.requestType = cseInfo.requestType;
        this.caseHeader.condusefFolio = cseInfo.condusefFolio;
        this.caseHeader.caseId = cseInfo.caseId;
        this.caseHeader.analyst = cseInfo.analyst;
        this.caseHeader.analystId = cseInfo.analystId;

        this.originOfClaim.requestType = cseInfo.requestType;
        this.originOfClaim.condusefFolio = cseInfo.condusefFolio;
        this.originOfClaim.arrivalMean = cseInfo.arrivalMean;
        this.originOfClaim.arrivalDate = cseInfo.arrivalDate;
        this.originOfClaim.endDate = cseInfo.endDate;
        this.originOfClaim.totalCareDays = cseInfo.totalCareDays;
        this.originOfClaim.hall = cseInfo.hall;
        this.caseForm.get('claimOriginStatus').setValue(cseInfo.statusId);

        this.originOfClaim.status = cseInfo.statusId;

        this.clientDetails.name = cseInfo.name;
        this.clientDetails.address.section1 = cseInfo.address_1;
        this.clientDetails.address.section2 = cseInfo.address_2;
        this.clientDetails.address.section3 = cseInfo.address_3;
        this.clientDetails.phoneNumber = cseInfo.phoneNumber;
        this.clientDetails.curp = cseInfo.curp;
        this.clientDetails.email = cseInfo.email;

        this.caseForm.get('clarificationInfo').get('clarificationId').setValue(cseInfo.clarificationInfo.clarificationId);
        this.caseForm.get('clarificationInfo').get('status').setValue(cseInfo.clarificationInfo.status);
        this.caseForm.get('clarificationInfo').get('opinion').setValue(cseInfo.clarificationInfo.opinion);
        this.caseForm.get('clarificationInfo').get('reclaimedAmount').setValue(cseInfo.clarificationInfo.reclaimedAmount);

        this.caseForm.get('conclusions').get('opinionId').setValue(cseInfo.opinionId);
        this.caseForm.get('conclusions').get('reasonId').setValue(cseInfo.reasonId);
        this.caseForm.get('conclusions').get('comments').setValue(cseInfo.comments);

        

        this.causes = cseInfo.causes;

        this.statusCatalogue = cse.respuesta.catalogues.status.catalogueElement;
        this.business = cse.respuesta.catalogues.business.catalogueElement;
        this.opinionsCatalogue = cse.respuesta.catalogues.opinion.catalogueElement;
        this.reasonsCatalogue = cse.respuesta.catalogues.reason.catalogueElement;
      });
    }
  }

  createCauses(causes: Cause[]): void {
    
    causes.forEach((cause,idx) => {
      let opinion = `opinion${idx}`;
      this.addCause(this.fb.group({
        business: [''],
        productType: [''],
        tradeName: [''],
        channel: [''],
        cause: [''],
        reclaimedAmount: [''],
        subsidizedAmount: [''],
        txsNumber: [''],
        opinion : [''],
        comments: ['']
      }));
      this.fillCause(cause, idx);
    });
  }

  addCause(cause: FormGroup) {
    const causes = this.caseForm.get('descriptionOfTheProblem') as FormArray;
    causes.push(cause);
  }

  fillCause( cause, idx ) {
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

  private initCaseHeader() {
    this.caseHeader = {
      requestType: '',
      condusefFolio: '',
      caseId: null,
      analyst: '',
      analystId: null
    }
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
      status: null
    }
  }

  private initClientDetails() {
    this.clientDetails = {
      name: '',
      address: {
        section1: '',
        section2: '',
        section3: '',
      },
      curp: '',
      phoneNumber: '',
      email: ''
    }
  }

  getField(field) {
    return this.caseForm.get(field).value;
  }




  onSubmit() {
    console.log('Formulario lleno', this.caseForm.value);
  }

}