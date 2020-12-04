import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, AfterViewInit, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { HeaderService } from 'dls';
import { Key } from 'protractor';
import { BehaviorSubject } from 'rxjs';

/**
 * Node for to-do item
 */
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
  selected: boolean;
  state: boolean;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
  selected: boolean;
  state: boolean;
}

/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
  'Canal de operación': {
  },
};
// const TREE_DATA2 = {
//   'Canal de operación': {
//     'Aplicación móvil': null,
//   },
//   Reminders: [
//     'Cook dinner',
//     'Read the Material Design spec',
//     'Upgrade Application to Angular'
//   ]
// };

const analistas = {
  'Catálogo analistas (Usuario, Nombre)': {
    '10028653 - JESUS ABAIS HERRERA': null,
    '10028652 - RAUL GONZALEZ PAEZ': null,
    '10028654 - ARTURO HERNANDEZ MEDERO': null,
    '722500 - NORMA AVENDAÑO ACOSTA': null,
    '976658 - DIEGO JIMENEZ MARTINEZ': null
  },
};
const unidadAtencionUsuariosCondusef = {
  'Catálogo unidad de atención a usuarios CONDUSEF (Delegación, Clave, Analista asignado)': {
    'AGUASCALIENTES - 010 - 10028654': null,
    'BAJA CALIFORNIA - 020 - 10028652': null,
    'BAJA CALIFORNIA SUR - 030 - 10028653': null,
    'CAMPECHE - 040 - 722500': null,
    'CAT EXTRANJERO - 340 - 976658': null,
    'CENTRO DE ATENCION TELEFONICA - 096': null,
    'CHIAPAS - 070 - 10028652': null,
    'CHIHUAHUA - 080 - 10028654': null,
    'CIUDAD JUAREZ - 081 - 722500': null,
    'COAHUILA - 050 - 976658': null,
    'COLIMA	- 060	- 10028653': null,
    'DIRECCION CONSULTIVA - 094	- 10028652': null,
    'DURANGO - 100 - 10028654': null,
    'ESTADO DE MEXICO - 110	- 722500': null,
    'GUANAJUATO	- 120	- 976658': null,
    'GUERRERO	- 130	- 10028653': null,
    'HIDALGO - 140 - 10028652': null,
    'JALISCO - 150 - 10028654': null,
    'METROPOLITANA CENTRAL - 090 - 722500': null,
    'METROPOLITANA CENTRO HISTORICO	- 350	- 976658': null,
    'METROPOLITANA ORIENTE - 093 - 10028653': null,
    'MICHOACAN - 160 - 10028652': null,
    'MORELOS - 170 - 10028654': null,
    'NAYARIT - 180 - 722500': null,
    'NUEVO LEON	- 190	- 976658': null,
    'OAXACA	- 200	- 10028653': null,
    'PUEBLA	- 210	- 10028652': null,
    'QUERETARO - 220 - 10028654': null,
    'QUINTANA ROO - 230 - 722500': null,
    'SAN LUIS POTOSI - 240 - 976658': null,
    // 'SELECCIONE - 000 - 10028653': null,
    'SINALOA - 250 - 10028652': null,
    'SONORA - 260 - 10028654': null,
    'TABASCO - 270 - 722500': null,
    'TAMAULIPAS	- 280	- 976658': null,
    'TLAXCALA	- 290	- 10028653': null,
    'VERACRUZ - 300 - 10028652': null,
    'YUCATAN - 310 - 10028654': null,
    'ZACATECAS - 320 - 722500': null
  },
};
const fallo = {
  'Catálogo fallo': {
    'EN CONTRA DEL USUARIO': null,
    'A FAVOR DEL USUARIO': null,
    'CERRADO POR REVERSA': null,
    'CONSULTA CONTESTADA': null
  },
};
const motivos = {
  'Catálogo motivos': {
    'DICTAMINACION JURIDICA': null,
    'DICTAMINACION UNE': null,
    'DETERMINACION DE NEGOCIO': null,
    'AUDITORIA INTERNA': null,
    'VALIDACION OPERATIVA': null
  },
};
const medioLlegada = {
  'Catálogo medio de llegada (Proceso, Días, Clave)': {
    'GESTION ELECTRONICA TRADICIONAL - 20	- 1/20': null,
    'GESTION ELECTRONICA PORI - 10 - 1/10': null,
    'GESTION ELECTRONICA INMEDIATA - 3 - 1/3': null,
    'UNIDAD ESPECIALIZADA ELECTRONICA - 30': null,
    'UNIDAD ESPECIALIZADA PRESENCIAL - 30': null
  },
};

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    // file node as children.
    const data = this.buildFileTree(analistas, 0);

    console.log(data);
    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }
      // node.selected = false;
      // node.state = true;

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({item: name} as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    
    this.dataChange.next(this.data);
  }
}

interface Catalogo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-administracion-catalogos',
  templateUrl: './administracion-catalogos.component.html',
  styleUrls: ['./administracion-catalogos.component.scss'],
  providers: [ChecklistDatabase]
})
export class AdministracionCatalogosComponent implements AfterViewInit {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  catalogos: Catalogo[] = [
    {value: 'analistas', viewValue: 'Catálogo analistas (Usuario, Nombre)'},
    {value: 'unidadAtencionUsuariosCondusef', viewValue: 'Catálogo unidad de atención a usuarios CONDUSEF (Delegación, Clave, Analista asignado)'},
    {value: 'fallo', viewValue: 'Catálogo fallo (Proceso, Días, Clave)'},
    {value: 'motivos', viewValue: 'Catálogo motivos'},
    {value: 'medioLlegada', viewValue: 'Catálogo medio de llegada'},
  ];

  constructor(private _database: ChecklistDatabase, public headerService: HeaderService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Administración de catálogos';
    });
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children?.length;
    flatNode.selected = false;
    flatNode.state = true;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

radioChange(node: TodoItemFlatNode) {
  this.treeControl.dataNodes.forEach(element => {
    element['selected'] = false;
  });
  node.selected = true;
}

cambioEstado(node) {
  node.state = !node.state;
}

cambioCatalogo(catalogoSeleccionado) {
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
  const data = this._database.buildFileTree(catalogo, 0);
  this._database.dataChange.next(data);
}

  /* Get the parent node of a node */
  getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TodoItemFlatNode, radioButton: any) {
    radioButton.checked = false;
    const parentNode = this.flatNodeMap.get(node);
    this._database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this._database.updateItem(nestedNode!, itemValue);
  }
}