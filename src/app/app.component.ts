import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  p1:Object;
  p2:Object;
  p3:Object;
  persons: Object[] = [];

  ngOnInit(): void {

    this.p1 = {id:"1", firstName:"hola", lastName:"2sada"}
    this.p2 = {id:"2", firstName:"chay", lastName:"asd"}
    this.p3 = {id:"3", firstName:"cosa", lastName:"eded"}

    this.persons = [this.p1, this.p2, this.p3];

    var dataArr: string[][] = [];

    var rowArray: string[] = [];

    var columns = [{title:'ID'}, {title:'Nombre'}, {title:'Apellido'}, {title:'Editar'}, {title:'boton'}]

    for (let p of this.persons){
      rowArray = [];
      for (let prop of Object.keys(this.persons[0])){
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
      pageLength: 2,
      columns: columns,
      columnDefs: [ {
          targets: 3,
          data: null,
          defaultContent: '<a title="Editar" id=editar><span class="fa fa-edit"></span></a>'
      },{
        targets: 4,
        data: null,
        defaultContent: '<a title="Editar" id=editar><span class="fa fa-map-marker"></span></a>'
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
