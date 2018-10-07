import { MenuService, PaisService } from './../service/index';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent {
    private menu : any;
    private paises : any;
    private paisSeleccionado : string;
    private clasePaisSeleccionado : string;
    private currentUser : any;

    constructor(private menuService : MenuService, private paisService : PaisService){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(){
        this.menuService.getMenu().subscribe(
            body => {
                this.menu = body;                
            },
            error => alert(error)
        );

        this.paisService.getPaises().subscribe(
            body => {
                this.paises = body;                
                var idDefault = this.paises.idPaisDefault;
                var p = this.paises.lista.find(x => x.id == idDefault)
                if(p){
                    this.paisSeleccionado = p.nombreLargo;
                    this.clasePaisSeleccionado = p.clase;
                    console.log(this.clasePaisSeleccionado + " : " + this.paisSeleccionado)
                } else{
                    this.paisSeleccionado = "Undefined";
                    this.clasePaisSeleccionado = "Undefined"
                }
            },
            error => alert(error)
        );
    }

    obtenerNombreLargoPaisDefault(): string  {
        
        var idDefault = this.paises.idPaisDefault;
        var nombre;
        var p = this.paises.lista.find(x => x.id == idDefault)
        if(p){
            nombre = p.nombreLargo;
        } else{
            nombre = "Undefined"
        }                
        return nombre;
    }
}