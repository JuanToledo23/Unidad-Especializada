import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, AfterViewInit, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { HeaderService } from 'dls';
import { Key } from 'protractor';
import { BehaviorSubject } from 'rxjs';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
  selected: boolean;
  status: boolean;
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  selected: boolean;
  status: boolean;
}

let TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple', selected: false, status: true},
      {name: 'Banana', selected: false, status: true},
      {name: 'Fruit loops', selected: false, status: true},
    ],
    selected: false,
    status: true
  }
];

const analistas = [
  {
    name: 'Catálogo analistas (Usuario, Nombre)',
    children: [
      { name: '10028653 - JESUS ABAIS HERRERA', selected: false, status: true },
      { name: '10028652 - RAUL GONZALEZ PAEZ', selected: false, status: true },
      { name: '10028654 - ARTURO HERNANDEZ MEDERO', selected: false, status: true },
      { name: '722500 - NORMA AVENDAÑO ACOSTA', selected: false, status: true },
      { name: '976658 - DIEGO JIMENEZ MARTINEZ', selected: false, status: true }
    ],
    selected: false,
    status: true
  }
];
const unidadAtencionUsuariosCondusef = [
  {
    name: 'Catálogo unidad de atención a usuarios CONDUSEF (Delegación, Clave, Analista asignado)',
    children: [
      { name: 'AGUASCALIENTES - 010 - 10028654', selected: false, status: true },
      { name: 'BAJA CALIFORNIA - 020 - 10028652', selected: false, status: true },
      { name: 'BAJA CALIFORNIA SUR - 030 - 10028653', selected: false, status: true },
      { name: 'CAMPECHE - 040 - 722500', selected: false, status: true },
      { name: 'CAT EXTRANJERO - 340 - 976658', selected: false, status: true },
      { name: 'CENTRO DE ATENCION TELEFONICA - 096', selected: false, status: true },
      { name: 'CHIAPAS - 070 - 10028652', selected: false, status: true },
      { name: 'CHIHUAHUA - 080 - 10028654', selected: false, status: true },
      { name: 'CIUDAD JUAREZ - 081 - 722500', selected: false, status: true },
      { name: 'COAHUILA - 050 - 976658', selected: false, status: true },
      { name: 'COLIMA	- 060	- 10028653', selected: false, status: true },
      { name: 'DIRECCION CONSULTIVA - 094	- 10028652', selected: false, status: true },
      { name: 'DURANGO - 100 - 10028654', selected: false, status: true },
      { name: 'ESTADO DE MEXICO - 110	- 722500', selected: false, status: true },
      { name: 'GUANAJUATO	- 120	- 976658', selected: false, status: true },
      { name: 'GUERRERO	- 130	- 10028653', selected: false, status: true },
      { name: 'HIDALGO - 140 - 10028652', selected: false, status: true },
      { name: 'JALISCO - 150 - 10028654', selected: false, status: true },
      { name: 'METROPOLITANA CENTRAL - 090 - 722500', selected: false, status: true },
      { name: 'METROPOLITANA CENTRO HISTORICO	- 350	- 976658', selected: false, status: true },
      { name: 'METROPOLITANA ORIENTE - 093 - 10028653', selected: false, status: true },
      { name: 'MICHOACAN - 160 - 10028652', selected: false, status: true },
      { name: 'MORELOS - 170 - 10028654', selected: false, status: true },
      { name: 'NAYARIT - 180 - 722500', selected: false, status: true },
      { name: 'NUEVO LEON	- 190	- 976658', selected: false, status: true },
      { name: 'OAXACA	- 200	- 10028653', selected: false, status: true },
      { name: 'PUEBLA	- 210	- 10028652', selected: false, status: true },
      { name: 'QUERETARO - 220 - 10028654', selected: false, status: true },
      { name: 'QUINTANA ROO - 230 - 722500', selected: false, status: true },
      { name: 'SAN LUIS POTOSI - 240 - 976658', selected: false, status: true },
      { name: 'SINALOA - 250 - 10028652', selected: false, status: true },
      { name: 'SONORA - 260 - 10028654', selected: false, status: true },
      { name: 'TABASCO - 270 - 722500', selected: false, status: true },
      { name: 'TAMAULIPAS	- 280	- 976658', selected: false, status: true },
      { name: 'TLAXCALA	- 290	- 10028653', selected: false, status: true },
      { name: 'VERACRUZ - 300 - 10028652', selected: false, status: true },
      { name: 'YUCATAN - 310 - 10028654', selected: false, status: true },
      { name: 'ZACATECAS - 320 - 722500', selected: false, status: true },
    ],
    selected: false, 
    status: true
  }
]
const fallo = [
  {
    name: 'Catálogo fallo',
    children: [
      { name: 'EN CONTRA DEL USUARIO', selected: false, status: true },
      { name: 'A FAVOR DEL USUARIO', selected: false, status: true },
      { name: 'CERRADO POR REVERSA', selected: false, status: true },
      { name: 'CONSULTA CONTESTADA', selected: false, status: true }
    ],
    selected: false, 
    status: true
  }
]

const motivos = [
  {
    name: 'Catálogo motivos',
    children: [
      { name: 'DICTAMINACION JURIDICA', selected: false, status: true },
      { name: 'DICTAMINACION UNE', selected: false, status: true },
      { name: 'DETERMINACION DE NEGOCIO', selected: false, status: true },
      { name: 'AUDITORIA INTERNA', selected: false, status: true },
      { name: 'VALIDACION OPERATIVA', selected: false, status: true }
    ],
    selected: false, 
    status: true
  }
]

const medioLlegada = [
  {
    name: 'Catálogo medio de llegada (Proceso, Días, Clave)',
    children: [
      { name: 'GESTION ELECTRONICA TRADICIONAL - 20	- 1/20', selected: false, status: true },
      { name: 'GESTION ELECTRONICA PORI - 10 - 1/10', selected: false, status: true },
      { name: 'GESTION ELECTRONICA INMEDIATA - 3 - 1/3', selected: false, status: true },
      { name: 'UNIDAD ESPECIALIZADA ELECTRONICA - 30', selected: false, status: true },
      { name: 'UNIDAD ESPECIALIZADA PRESENCIAL - 30', selected: false, status: true }
    ],
    selected: false, 
    status: true
  }
]

interface Catalogo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-administracion-catalogos',
  templateUrl: './administracion-catalogos.component.html',
  styleUrls: ['./administracion-catalogos.component.scss']
})
export class AdministracionCatalogosComponent implements AfterViewInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      selected: node.selected,
      status: node.status
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  catalogos: Catalogo[] = [
    {value: 'analistas', viewValue: 'Catálogo analistas (Usuario, Nombre)'},
    {value: 'unidadAtencionUsuariosCondusef', viewValue: 'Catálogo unidad de atención a usuarios CONDUSEF (Delegación, Clave, Analista asignado)'},
    {value: 'fallo', viewValue: 'Catálogo fallo (Proceso, Días, Clave)'},
    {value: 'motivos', viewValue: 'Catálogo motivos'},
    {value: 'medioLlegada', viewValue: 'Catálogo medio de llegada'},
  ];

  catalogoSeleccionado = false;
  cambiosArbol = false;
  nodeToAdd:any;

  constructor(public headerService: HeaderService) {
    this.dataSource.data = analistas;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Administración de catálogos';
    });
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
  hasNoContent = (_: number, node: ExampleFlatNode) => node.name === '';

  // flatNodeMap = new Map<ExampleFlatNode, TodoItemNode>();

  /** Select the category so we can insert the new item. */
  addNewItem(node: ExampleFlatNode) {
    console.log(node);
    // this.nodeToAdd = node;
    let catalogo;
    switch (node.name) {
      case 'Catálogo analistas (Usuario, Nombre)':
        catalogo = analistas;
        break;
      case 'Catálogo unidad de atención a usuarios CONDUSEF (Delegación, Clave, Analista asignado)':
        catalogo = unidadAtencionUsuariosCondusef;
        break;
      case 'Catálogo fallo':
        catalogo = fallo;
        break;
      case 'Catálogo motivos':
        catalogo = motivos;
        break;
      case 'Catálogo medio de llegada (Proceso, Días, Clave)':
        catalogo = medioLlegada;
        break;
    
      default:
        break;
    }

    catalogo[0].children.push({
      name: 'Juan Alberto Toledo Tello',
      selected: false,
      status: true

    });
    this.dataSource.data = catalogo;
    this.treeControl.expand(this.treeControl.dataNodes[0]);
    this.cambiosArbol = true;
  }

  /** Save the node to database */
  saveNode(itemValue: string) {
    console.log(this.nodeToAdd);
    console.log(itemValue);
    // const nestedNode = this.flatNodeMap.get(node);
    // this._database.updateItem(nestedNode!, itemValue);
  }

  cambioCatalogo(catalogoSeleccionado) {
    console.log(analistas)
    let catalogo;
    switch (catalogoSeleccionado.value) {
      case 'analistas':
        catalogo = analistas;
        break;
      case 'unidadAtencionUsuariosCondusef':
        catalogo = unidadAtencionUsuariosCondusef;
        break;
      case 'fallo':
        catalogo = fallo;
        break;
      case 'motivos':
        catalogo = motivos;
        break;
      case 'medioLlegada':
        catalogo = medioLlegada;
        break;
    
      default:
        break;
    }
    this.dataSource.data = catalogo;
    this.dataSource.data[0].children.forEach(element => {
      element.selected = false;
    });
    this.treeControl.dataNodes.forEach(element => {
      element.selected = false;
    });
    this.catalogoSeleccionado = true;
  }

  cambioRadio(node: ExampleFlatNode) {
    console.log(node);
    this.dataSource.data[0].children.forEach(element => {
        element.selected = false;
    });
    this.treeControl.dataNodes.forEach(element => {
        element.selected = false;
    });
    this.dataSource.data[0].children.forEach(element => {
      if(element.name === node.name) {
        element.selected = true;
        node.selected = true;
      }
    });
    if(node.expandable) {
      node.selected = true;
    }
  }

  cambioEstado(node) {
    this.dataSource.data[0].children.forEach(element => {
      if(element.name === node.name) {
        element.status = !element.status;
        node.status = !node.status;
      }
    });
  }
}