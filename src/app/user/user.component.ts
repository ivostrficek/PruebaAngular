import { UserService, HelperTypeService, MessageService } from './../service/index';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['user.component.css']
})
export class UserComponent {

    // @ViewChild('modalEdit') modalEdit: any;
    // @ViewChild('modalNew') modalNew: any;
    // @ViewChild('tabla') table: any;
    private ShowAdvancesFilter: boolean = false;
    private columnsHeaders: any[];
    private columnsDefinitions: any[];
    private users:any;
    private message = '';
    private userToEdit : any = {user:"", tipo:"", pais:"", mail:""};
    private advancedFilter: any = {user:"", tipo:"-1", deBaja:"-1"}
    private userTypes : any;

    constructor(private userService: UserService, private router: Router, private helperTypeService: HelperTypeService,private messageService:MessageService) {
    }

    ngOnInit() {
        this.messageService.sendMessage(true);
      this.obtenerUsuarios();
      this.helperTypeService.getUserTypes().subscribe(
          body => {
              this.userTypes = body;
              console.log(this.userTypes);
          },
          error => alert(error)
      )

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
        
    obtenerUsuarios(){
        this.userService.getAll().subscribe(
            body => {
                this.users = body;
            },
            error => alert(error)
        );
    }

    changeAdvancedFilterVisibility() {
        this.ShowAdvancesFilter = !this.ShowAdvancesFilter;
    }

    // editarUsuario(user:any){
    //     this.userToEdit = user;
    //     this.modalEdit.show();
    // }

    // crearUsuario(){        
    //     this.modalNew.show();
    // }

    buscarUsuario(user:any){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        user.currentUserId = currentUser.id;
        user.currentUserType = currentUser.type;
        this.userService.getFilteredUser(user).subscribe(
            body => {this.users = body;},
            error => console.log(error)            
        );
    }

}