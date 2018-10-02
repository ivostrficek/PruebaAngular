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
  @Input() inputData: any;
   /**
   * Get the columns headers of the grid
   */
  @Input() columsHeaders: any;

  dtOptions: DataTables.Settings = {};
  p1:Object;
  p2:Object;
  p3:Object;
  persons: Object[] = [];

  ngOnInit(): void {

    // this.p1 = {id:"1", firstName:"hola", lastName:"2sada"}
    // this.p2 = {id:"2", firstName:"chay", lastName:"asd"}
    // this.p3 = {id:"3", firstName:"cosa", lastName:"eded"}

    // this.persons = [this.p1, this.p2, this.p3];

    var dataArr: string[][] = [];

    var rowArray: string[] = [];

    var columns = [{title:'ID'}, {title:'Nombre'}, {title:'Apellido'}, {title:'Editar'}, {title:'boton'}]

    for (let p of this.inputData){
      rowArray = [];
      for (let prop of Object.keys(this.inputData[0])){
        rowArray.push(p[prop])
      }
      dataArr.push(rowArray)
    }
    
    this.dtOptions = {
      data: dataArr,
      
      language: {
        paginate: {
            first:    'Primero',
            previous: 'Anterior',
            next:     'Siguiente',
            last:     'Ultimo'
        }
      },
      pageLength: 10,
      columns: columns,
      columnDefs: [ {
          targets: 3,
          data: null,
          defaultContent: '<a title="Editar"><span class="glyphicon glyphicon-edit"></span></a>'
      },{
        targets: 4,
        data: null,
        defaultContent: '<a title="Plantas"><span class="glyphicon glyphicon-map-marker"></span></a>'
    } ],
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
