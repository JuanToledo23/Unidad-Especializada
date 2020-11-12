import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CasoService } from 'dls';
import { CaseService, Catalogue, CatalogueElement } from 'core';
import { Observable, Subject } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

@Component({
    selector: 'consulta-antecedentes-aclaraciones',
    templateUrl: './consulta-antecedentes-aclaraciones.html'
})
export class ConsultaAntecedentesAclaracionesForm {
    @Input() form: FormGroup;
    constructor(public casoService: CasoService) { }
}

export interface Label {
    label: string;
    value: string;
}

export interface Case {
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
    searchType: Label
    subsidizedAmount: number;
    tradeName: CatalogueElement[];
    tradeNameId: number;
    txsNumber: number;
    uniqueClient: string;
}

@Component({
    selector: 'consulta-descripcion-problema',
    templateUrl: './consulta-descripcion-problema.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsultaDescripcionProblemaForm implements OnInit {
    theCase: Case;

    @Input() businessCatalogue: Catalogue[];

    @Input() idx: number;

    @Input() form: FormGroup;

    @Input() set case(value: Case) {
        setTimeout( () => {
            if (!value) { return }
            this.productTypes.next(value.productType);
            this.tradenames.next(value.tradeName);
            this.channels.next(value.channel);
            this.causes.next(value.cause);
        })
       
    };

    private productTypes: Subject<CatalogueElement[]>;
    productTypes$: Observable<CatalogueElement[]>;
    private channels: Subject<CatalogueElement[]>;
    channels$: Observable<CatalogueElement[]>;
    private causes: Subject<CatalogueElement[]>;
    causes$: Observable<CatalogueElement[]>;
    private tradenames: Subject<CatalogueElement[]>
    tradeNames$: Observable<CatalogueElement[]>;

    constructor(
        public casoService: CasoService,
        private caseService: CaseService,
        private cdr: ChangeDetectorRef ) {
            this.productTypes = new Subject<CatalogueElement[]>();
            this.productTypes$ = this.productTypes.asObservable();
            this.tradenames = new Subject<CatalogueElement[]>();
            this.tradeNames$ = this.tradenames.asObservable();
            this.channels = new Subject<CatalogueElement[]>();
            this.channels$ = this.channels.asObservable();
            this.causes = new Subject<CatalogueElement[]>();
            this.causes$ = this.causes.asObservable();
    }

    ngOnInit(): void {}

    businessSelected(matSelectChange: MatSelectChange) {
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('productType').reset('-1');
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('tradeName').reset('-1');
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('channel').reset('-1');
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('cause').reset('-1');

        this.caseService.getCatalogues({
            "dependency": true,
            "dependencyInfo": [{
                "fieldName": "business",
                "selectionId": matSelectChange.value
            }],
            "fieldName": "productType"
          }).subscribe( catalogues => this.productTypes.next( catalogues.respuesta.responseInfo.catalogueElement ) );
    }

    productTypeSelected(matSelectChange: MatSelectChange) {
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('tradeName').reset('-1');
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('channel').reset('-1');
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('cause').reset('-1');

        this.caseService.getCatalogues({
            "dependency": true,
            "dependencyInfo": [{
                "fieldName": "business",
                "selectionId": this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('business').value
            }, {
                "fieldName": "productType",
                "selectionId": matSelectChange.value
            }],
            "fieldName": "tradeName"
          }).subscribe( catalogues => this.tradenames.next( catalogues.respuesta.responseInfo.catalogueElement ) );
    }

    tradeNameSelected(matSelectChange: MatSelectChange) {
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('channel').reset('-1');
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('cause').reset('-1');

        this.caseService.getCatalogues({
            "dependency": true,
            "dependencyInfo": [{
                "fieldName": "business",
                "selectionId": this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('business').value
            }, {
                "fieldName": "productType",
                "selectionId": this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('productType').value
            }, {
                "fieldName": "tradeName",
                "selectionId": matSelectChange.value
            }],
            "fieldName": "channel"
          }).subscribe( catalogues => this.channels.next( catalogues.respuesta.responseInfo.catalogueElement ) );
    }

    channelSelected(matSelectChange: MatSelectChange) {
        this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('cause').reset('-1');

        this.caseService.getCatalogues({
            "dependency": true,
            "dependencyInfo": [{
                "fieldName": "business",
                "selectionId": this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('business').value
            }, {
                "fieldName": "productType",
                "selectionId": this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('productType').value
            }, {
                "fieldName": "tradeName",
                "selectionId": this.form.get('descriptionOfTheProblem').get(`${this.idx}`).get('tradeName').value
            }, {
                "fieldName": "channel",
                "selectionId": matSelectChange.value
            }],
            "fieldName": "cause"
          }).subscribe( catalogues => this.causes.next( catalogues.respuesta.responseInfo.catalogueElement ) );
    }

    trackByFn(index: any, item: any) {
        return index;
    }


}

@Component({
    selector: 'consulta-conclusion',
    templateUrl: './consulta-conclusion.html'
})
export class ConsultaConclusionForm {
    @Input() form: FormGroup;
    @Input() catalogues: any;
}

@Component({
    selector: 'consulta-documentos',
    templateUrl: './consulta-documentos.html'
})
export class ConsultaDocumentosForm {

    files = [
        { id: 'file1', label: 'Reclamación y anexos', name: 'ADJUNTAR ARCHIVO', estatus: false },
        { id: 'file2', label: 'Soportes de la respuesta', name: 'ADJUNTAR ARCHIVO', estatus: false },
        { id: 'file3', label: 'Soportes operativos', name: 'ADJUNTAR ARCHIVO', estatus: false },
    ];

    handleFileInput(loadedFile, file) {
        const selectedFile = this.files[this.files.indexOf(file)]
        selectedFile.estatus = true;
        selectedFile.name = loadedFile[0].name;
    }
}
