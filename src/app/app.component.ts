import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dataToShow: any[] = [];
  columnsHeaders: any[];
  columnsDefinitions: any[];


  ngOnInit(): void {
    this.dataToShow = [
      {
          idUsuario: "3144",
          usuario: "Admin, Super",
          nombre: "Super",
          apellido: "Admin",
          tipo: "Super Administrador",
          pais: "Argentina",
          baja: "No",
          mail: "supradmin@estrucplan.com.ar"
      },
      {
          "idUsuario": "3145",
          "usuario": "Administrador, -",
          "nombre": "-",
          "apellido": "Administrador",
          "tipo": "Administrador",
          "pais": "Argentina",
          "baja": "No",
          "mail": "admin@estrucplan.com.ar"
      },
      {
          "idUsuario": "3146",
          "usuario": "Admin, Us",
          "nombre": "Us",
          "apellido": "Admin",
          "tipo": "Usuario Administrador",
          "pais": "Argentina",
          "baja": "No",
          "mail": "usadmin@estrucplan.com.ar"
      },
      {
          "idUsuario": "3147",
          "usuario": "kito, esteban",
          "nombre": "esteban",
          "apellido": "kito",
          "tipo": "Profesional",
          "pais": "Argentina",
          "baja": "No",
          "mail": "esteban@cualquiera.com"
      },
      {
          "idUsuario": "3148",
          "usuario": "Ja, Tuvie",
          "nombre": "Tuvie",
          "apellido": "Ja",
          "tipo": "Profesional",
          "pais": "Argentina",
          "baja": "No",
          "mail": "cosa|@cosa.com"
      },
      {
          "idUsuario": "3149",
          "usuario": "asdf, fsd",
          "nombre": "fsd",
          "apellido": "asdf",
          "tipo": "Profesional",
          "pais": "Ecuador",
          "baja": "No",
          "mail": "sdfa@sdff.com"
      }
  ];
    this.columnsHeaders = [{title:'idUsuario'},{title:'Usuario'},{title:'nombre'},{title:'apellido'},{title:'Tipo'}, {title:'Pais Default'}, {title:'Baja'}, {title:'Email'}, {title:'Editar'}, {title:'Plantas'}, {title:'Paises'}]
    this.columnsDefinitions = [{
        "targets": [0],
        "visible": false,
        "searchable": false
    },
    {
        "targets": [2],
        "visible": false,
        "searchable": false
    },
    {
        "targets": [3],
        "visible": false,
        "searchable": false
    },
    {
        className: "dt-center",
        targets:8,
        data:null,
        defaultContent:'<a title="Plantas"><span class="fa fa-edit"></span></a>'
    },
    {
        className: "dt-center",
        targets:9,
        data:null,
        defaultContent:'<a title="Plantas"><span class="fa fa-map-marker"></span></a>'
    },
    {
        targets:10,
        data:null,
        defaultContent:'<a title="Plantas"><span class="fa fa-map-marker"></span></a>'
    }]
  }
  
}
