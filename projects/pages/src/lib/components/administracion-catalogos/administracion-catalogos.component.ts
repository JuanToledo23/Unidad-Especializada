import { Component, AfterViewInit, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'dls';
import { ConfirmarItemDialog } from './dialogs/confirmar-item.dialog';

interface Catalogo {
  value: string;
  viewValue: string;
  show: boolean;
}
@Component({
  selector: 'app-administracion-catalogos',
  templateUrl: './administracion-catalogos.component.html',
  styleUrls: ['./administracion-catalogos.component.scss']
})
export class AdministracionCatalogosComponent implements AfterViewInit {

  catalogos: Catalogo[] = [
    {value: 'analistas', viewValue: 'ANALISTAS', show: false},
    {value: 'uau', viewValue: 'UNIDAD DE ATENCIÓN A USUARIOS (UAU)', show: false},
    {value: 'fallo', viewValue: 'FALLO', show: false},
    {value: 'medioLlegada', viewValue: 'MEDIO DE LLAGADA', show: false},
    {value: 'unidadNegocio', viewValue: 'UNIDAD DE NEGOCIO', show: false},
    {value: 'tipoProductoServicio', viewValue: 'TIPO DE PRODUCTO O SERVICIO', show: false},
    {value: 'nombreComercial', viewValue: 'NOMBRE COMERCIAL', show: false},
    {value: 'canalOperacion', viewValue: 'CANAL DE OPERACIÓN', show: false},
    {value: 'causaInconformidad', viewValue: 'CAUSA DE INCONFORMIDAD', show: false},
  ];

  catalogoAnalistas = [
    {
      name: 'Analistas',
      selected: false,
      show: true,
      catalogo: [
        { name: '10028653 - JESUS ABAIS HERRERA', selected: false, status: true },
        { name: '10028652 - RAUL GONZALEZ PAEZ', selected: false, status: true },
        { name: '10028654 - ARTURO HERNANDEZ MEDERO', selected: false, status: true },
        { name: '722500 - NORMA AVENDAÑO ACOSTA', selected: false, status: true },
        { name: '976658 - DIEGO JIMENEZ MARTINEZ', selected: false, status: true }
      ]
    }
  ];
  
  catalogoUnidadAtencionUsuariosCondusef = [
    {
      name: 'Unidad de atención a usuarios (UAU)',
      selected: false,
      show: true,
      catalogo: [
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
      ]
    }
  ];
  
  catalogoFallo = [
    {
      name: 'Fallo',
      selected: false,
      show: true,
      catalogo: [
        { name: 'EN CONTRA DEL USUARIO', selected: false, status: true },
        { name: 'A FAVOR DEL USUARIO', selected: false, status: true },
        { name: 'CERRADO POR REVERSA', selected: false, status: true },
        { name: 'CONSULTA CONTESTADA', selected: false, status: true }
      ]
    }
  ];

  catalogoMedioLllegada = [
    {
      name: 'Medio de llegada',
      selected: false,
      show: true,
      catalogo: [
        { name: 'GESTION ELECTRONICA TRADICIONAL - 20	- 1/20', selected: false, status: true },
        { name: 'GESTION ELECTRONICA PORI - 10 - 1/10', selected: false, status: true },
        { name: 'GESTION ELECTRONICA INMEDIATA - 3 - 1/3', selected: false, status: true },
        { name: 'UNIDAD ESPECIALIZADA ELECTRONICA - 30', selected: false, status: true },
        { name: 'UNIDAD ESPECIALIZADA PRESENCIAL - 30', selected: false, status: true }
      ]
    }
  ];

  catalogoUnidadNegocio = [
    {
      name: 'Unidad de negocio',
      selected: false,
      show: true,
      catalogo: [
        { name: 'BIG', selected: false, status: true },
        { name: 'CAPTACIÓN', selected: false, status: true },
        { name: 'CRÉDITO Y COBRANZA', selected: false, status: true },
        { name: 'OTROS', selected: false, status: true },
        { name: 'PRESTA PRENDA', selected: false, status: true },
        { name: 'PROGRAMAS SOCIALES', selected: false, status: true }
      ]
    }
  ];

  catalogoTipoProductoServicio = [
    {
      name: 'Tipo de producto o servicio',
      selected: false,
      show: true,
      catalogo: [
        { name: 'CRÉDITO AL CONSUMO', selected: false, status: true },
        { name: 'CRÉDITO NÓMINA', selected: false, status: true },
        { name: 'CRÉDITO PERSONAL', selected: false, status: true },
        { name: 'CRÉDITO PERSONAL PP', selected: false, status: true },
        { name: 'CUENTAS A LA VISTA CA', selected: false, status: true },
        { name: 'CUENTAS A LA VISTA PS', selected: false, status: true },
        { name: 'OTROS CP', selected: false, status: true },
        { name: 'SERVICIOS A TERCEROS', selected: false, status: true },
        { name: 'TARJETAS DE CRÉDITO', selected: false, status: true },
        { name: 'TRANSMISORES SIPA', selected: false, status: true }

      ]
    }
  ];

  catalogoNombreComercial = [
    {
      name: 'Nombre comercial',
      selected: false,
      show: true,
      catalogo: [
        { name: 'CREDIMAX', selected: false, status: true },
        { name: 'CREDIMAX CAC', selected: false, status: true },
        { name: 'CRÉDITO NÓMINA AZTECA 23 342', selected: false, status: true },
        { name: 'CUENTA BIENESTAR N2 17 0001', selected: false, status: true },
        { name: 'DÉBITO AZTECA NEGOCIO 13', selected: false, status: true },
        { name: 'DINERO AL INSTANTE CON BAZ', selected: false, status: true },
        { name: 'GUARDADITO 002 0001', selected: false, status: true },
        { name: 'INVERSIÓN AZTECA 14', selected: false, status: true },
        { name: 'SERVICIOS A TERCEROS', selected: false, status: true },
        { name: 'TARJETA AZTECA', selected: false, status: true },
        { name: 'TARJETAS DE CRÉDITO ORO GARANTIZADAS', selected: false, status: true }
      ]
    }
  ];

  catalogoCanalOperacion = [
    {
      name: 'Canal de operación',
      selected: false,
      show: true,
      catalogo: [
        { name: 'APLICACIÓN MÓVIL', selected: false, status: true },
        { name: 'CAJERO AUTOMÁTICO', selected: false, status: true },
        { name: 'COBRANZA', selected: false, status: true },
        { name: 'COMISIONISTAS', selected: false, status: true },
        { name: 'E-COMMERCE', selected: false, status: true },
        { name: 'NO APLICA', selected: false, status: true },
        { name: 'OTRAS APLICACIONES', selected: false, status: true },
        { name: 'PORTAL', selected: false, status: true },
        { name: 'SUCURSAL', selected: false, status: true },
        { name: 'TPV', selected: false, status: true },
      ]
    }
  ];
  
  catalogoCausaInconformidad = [
    {
      name: 'Causa de inconformidad',
      selected: false,
      show: true,
      catalogo: [
        { name: 'ACTUALIZACIÓN DE DATOS DEL CLIENTE', selected: false, status: true },
        { name: 'ACTUALIZACIÓN DE HISTORIAL CREDITICIO NO REALIZADA', selected: false, status: true },
        { name: 'BLOQUEO DEL PRODUCTO O SERVICIO SIN PREVIO AVISO', selected: false, status: true },
        { name: 'CANCELACIÓN DE PRODUCTO O SERVICIO', selected: false, status: true },
        { name: 'CARGOS NO RECONOCIDOS EN LA CUENTA', selected: false, status: true },
        { name: 'COMPENSACIÓN', selected: false, status: true },
        { name: 'CONSULTA EN LA NEGOCIACIÓN DE CRÉDITOS (ORIENTACIÓN)', selected: false, status: true },
        { name: 'CONSUMOS NO RECONOCIDOS', selected: false, status: true },
        { name: 'DÉPOSITO NO APLICADO TOTAL O PARCIALMENTE', selected: false, status: true },
        { name: 'DEVOLUCIÓN EN COMERCIO NO APLICADA', selected: false, status: true },
        { name: 'DISPOSICIÓN DE EFECTIVO NO RECONOCIDA', selected: false, status: true },
        { name: 'EFECTIVO NO DISPENSADO TOTAL O PARCIAL', selected: false, status: true },
        { name: 'ENVÍO DE DINERO', selected: false, status: true },
        { name: 'GESTIÓN DE COBRANZA CON MALTRATO Y OFENSAS', selected: false, status: true },
        { name: 'INCONFORMIDAD CON EL CAMBIO DE CONDICIONES DEL CONTRATO', selected: false, status: true },
        { name: 'INCONFORMIDAD CON EL COBRO DE COMISIONES', selected: false, status: true },
        { name: 'INCONFORMIDAD CON LA CONTRATACIÓN DE PRODUCTOS O SERVICIOS…', selected: false, status: true },
        { name: 'PAGO A BENEFICIARIO', selected: false, status: true },
        { name: 'PAGO DE SERVICIO NO APLICADO', selected: false, status: true },
        { name: 'PAGO NO APLICADO TOTAL O PARCIALMENTE', selected: false, status: true },
        { name: 'PRIMERA SOLICITUD DE DOCUMENTOS', selected: false, status: true },
        { name: 'PROMOCIONES, BENEFICIOS, MESES SIN INTERESES, SORTEOS Y/O PREMIOS…', selected: false, status: true },
        { name: 'ROBO DE IDENTIDAD', selected: false, status: true },
        { name: 'ROBO O EXTRAVÍO DE PRENDAS', selected: false, status: true },
        { name: 'TRANSFERENCIA ELECTRÓNICA NO APLICADA', selected: false, status: true },
        { name: 'TRANSFERENCIA ELECTRÓNICA NO RECONOCIDA', selected: false, status: true },
      ]
    }
  ];
  

  showTextEditar = false;

  showAsociar = false;

  showBotonGuardar = false;

  //Formularios
  agregarAnalistaFormulario = false;
  agregarUnidadAtencionUsuarios = false;
  agregarFallo = false;
  agregarMedioLlegada = false;
  agregarUnidadNegocio = false;
  agregarTipoProductoServicio = false;
  agregarNombreComercial = false;
  agregarCanalOperacion = false;
  agregarCausaInconformidad = false;

  catalogoSeleccionado: any;

  //Valores de nuevos elementos
  valuesNuevoAnalista = {usuario: '', nombres: '', apellidoPaterno: '', apellidoMaterno: ''};
  valuesUnidadAtencionUsuarios = {nombre: '', clave: '', analistaAsigando: ''};
  valuesFallo = {nombre: ''};
  valuesMedioLlegada = {nombre: '', dias: '', clave: ''};
  valuesUnidadNegocio = {nombre: ''};
  valuesTipoProductoServicio = {nombre: ''};
  valuesNombreComercial = {nombre: ''};
  valuesCanalOperacion = {nombre: ''};
  valuesCausaInconformidad = {nombre: ''};

  nuevoElemento = {name: '', selected: false, status: true };


  constructor(public headerService: HeaderService, public dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Administración de catálogos';
    });
  }

  expandirComprimir(catalogo) {
    catalogo.show = !catalogo.show;
  }

  cambioRadio(catalogo, node?) {
    catalogo.selected = false;
    catalogo.catalogo.forEach(element => {
      element.selected = false;
    });
    if(node) {
      node.selected = true;
    } else {
      catalogo.selected = true;
    }
  }

  cambioEstado(node) {
    node.status = !node.status;
  }

  agregarElemento(catalogo) {
    this.catalogoSeleccionado = catalogo;
    switch (catalogo.name) {
      case 'Analistas':
        this.agregarAnalistaFormulario = true;
        break;
      case 'Unidad de atención a usuarios (UAU)':
        this.agregarUnidadAtencionUsuarios = true;
        break;
      case 'Fallo':
        this.agregarFallo = true;
        break;
      case 'Medio de llegada':
        this.agregarMedioLlegada = true;
        break;
      case 'Unidad de negocio':
        this.agregarUnidadNegocio = true;
        break;
      case 'Tipo de producto o servicio':
        this.agregarTipoProductoServicio = true;
        break;
      case 'Nombre comercial':
        this.agregarNombreComercial = true;
        break;
      case 'Canal de operación':
        this.agregarCanalOperacion = true;
        break;
      case 'Causa de inconformidad':
        this.agregarCausaInconformidad = true;
        break;
    
      default:
        break;
    }
    this.showBotonGuardar = true;
  }

  guardarElemento() {

    let elemento = '';
    switch (this.catalogoSeleccionado.name) {
      case 'Analistas':
        elemento = this.valuesNuevoAnalista.nombres + ' ' + this.valuesNuevoAnalista.apellidoPaterno + ' ' + this.valuesNuevoAnalista.apellidoMaterno;
        break;
      case 'Unidad de atención a usuarios (UAU)':
        elemento = this.valuesUnidadAtencionUsuarios.nombre;
        break;
      case 'Fallo':
        elemento = this.valuesFallo.nombre;
        break;
      case 'Medio de llegada':
        elemento = this.valuesMedioLlegada.nombre;
        break;
      case 'Unidad de negocio':
        elemento = this.valuesUnidadNegocio.nombre;
        break;
      case 'Tipo de producto o servicio':
        elemento = this.valuesTipoProductoServicio.nombre;
        break;
      case 'Nombre comercial':
        elemento = this.valuesNombreComercial.nombre;
        break;
      case 'Canal de operación':
        elemento = this.valuesCanalOperacion.nombre;
        break;
      case 'Causa de inconformidad':
        elemento = this.valuesCausaInconformidad.nombre;
        break;
    
      default:
        break;
    }
    this.nuevoElemento.name = elemento;
    const dialogRef = this.dialog.open(ConfirmarItemDialog, {
      disableClose: true,
      data: {
        info: this.nuevoElemento,
        catalogo: this.catalogoSeleccionado
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.showBotonGuardar = false;
        this.catalogoSeleccionado.catalogo.push(this.nuevoElemento);

        this.valuesNuevoAnalista = {usuario: '', nombres: '', apellidoPaterno: '', apellidoMaterno: ''};
        this.valuesUnidadAtencionUsuarios = {nombre: '', clave: '', analistaAsigando: ''};
        this.valuesFallo = {nombre: ''};
        this.valuesMedioLlegada = {nombre: '', dias: '', clave: ''};
        this.valuesUnidadNegocio = {nombre: ''};
        this.valuesTipoProductoServicio = {nombre: ''};
        this.valuesNombreComercial = {nombre: ''};
        this.valuesCanalOperacion = {nombre: ''};
        this.valuesCausaInconformidad = {nombre: ''};

        this.agregarAnalistaFormulario = false;
        this.agregarUnidadAtencionUsuarios = false;
        this.agregarFallo = false;
        this.agregarMedioLlegada = false;
        this.agregarUnidadNegocio = false;
        this.agregarTipoProductoServicio = false;
        this.agregarNombreComercial = false;
        this.agregarCanalOperacion = false;
        this.agregarCausaInconformidad = false;
        
        this.nuevoElemento = {name: '', selected: false, status: true }
      }
    });
  }


  cambioCatalogo(catalogoSeleccionado) {
    this.catalogos.forEach(element => {
      element.show = false;
    });
    this.showTextEditar = true;
    if(catalogoSeleccionado.value === 'asociar') {
      this.showAsociar = true;
    } else {
      this.showAsociar = false;
      this.catalogos.find(element => element.value === catalogoSeleccionado.value).show = true;
    }
  }
}