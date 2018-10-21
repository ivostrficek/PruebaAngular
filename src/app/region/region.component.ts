import { Component, OnInit } from '@angular/core';
import { HelperTypeService } from '../service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  private columnsHeaders: any[];
  private columnsDefinitions: any[];
  private regiones: Array<any>;

  constructor(private helperTypeService: HelperTypeService) {
  }

  ngOnInit() {
    this.configurarGrid();

    this.helperTypeService.getRegionesBusquedaGeneral(1).subscribe(
      body => {
        this.regiones = body;
      },
      error => alert(error)
    );
  }

  configurarGrid() {
    this.columnsHeaders = [{ title: 'IDRegion' }, { title: 'IDPais' }, { title: 'Region' }, { title: 'Baja' }, { title: 'Editar' }, { title: 'Eliminar' }]
    this.columnsDefinitions = [{
      targets: [0, 1],
      visible: false,
      searchable: false
    },
    {
      className: "dt-center",
      targets: 4,
      data: null,
      defaultContent: '<a title="Plantas"><span class="fa fa-edit"></span></a>'
    },
    {
      className: "dt-center",
      targets: 5,
      data: null,
      defaultContent: ''
    }]
  }

}
