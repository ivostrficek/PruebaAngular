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
    private Users:any;
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
    }
        
    obtenerUsuarios(){
        this.userService.getAll().subscribe(
            body => {
                this.Users = body;
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
            body => {this.Users = body;},
            error => console.log(error)            
        );
    }

}