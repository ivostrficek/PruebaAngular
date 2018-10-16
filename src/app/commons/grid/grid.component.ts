import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

   /**
   * Get the data that will be displayed on the grid
   */
  @Input() inputData: any = [];
   /**
   * Get the columns headers of the grid
   */
  @Input() columsHeaders: any = [];
   /**
   * Get the columns headers of the grid
   */
  @Input() columnsDefinitions: any = [];

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    var dataArr: string[][] = [];

    var rowArray: string[] = [];

    for (let p of this.inputData){
      rowArray = [];
      for (let prop of Object.keys(this.inputData[0])){
        rowArray.push(p[prop])
      }
      dataArr.push(rowArray)
    }
    
    this.dtOptions = {
      data: dataArr,   
      ordering: false,
			searching: true,
			autoWidth: false,   
      language: {
        processing:     "Procesando...",
        lengthMenu:    "Mostrar _MENU_ registros",
        search:         "Buscar:",
        info:           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        infoEmpty:      "Mostrando registros del 0 al 0 de un total de 0 registros",
        infoFiltered:   "(filtrado de un total de _MAX_ registros)",
        infoPostFix:    "",
        loadingRecords: "Cargando...",
        zeroRecords:    "No se encontraron resultados",
        emptyTable:     "Ningún dato disponible en esta tabla",
        paginate: {
            first:      "Primero",
            previous:   "Anterior",
            next:       "Siguiente",
            last:       "Último"
        },
        aria: {
            sortAscending:  ": Activar para ordenar la columna de manera ascendente",
            sortDescending: ": Activar para ordenar la columna de manera descendente"
        }
    },
      pageLength: 10,
      columns: this.columsHeaders,
      columnDefs: this.columnsDefinitions,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('#editar', row).unbind('click');
        $('#editar', row).bind('click', () => {
          self.editClickHandler(data);
        });

        $('#boton', row).unbind('click');
        $('#boton', row).bind('click', () => {
          self.queMirasClickHandler(data);
        });
      }
    };
  }

  editClickHandler(info: any): void {
    console.log("Apretaste edit")
  }

  queMirasClickHandler(info: any): void {
    console.log("apretaste que miras");
  }
}
