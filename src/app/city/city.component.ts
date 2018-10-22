import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  private ShowAdvancedFilter: boolean = false;
  private advancedFilter: any = { alcance: "-1", provincia: "-1", municipio: "-1", organismo: "", deBaja: "-1" }
  private cities: Array<any>;
  private columnsHeaders: any[];
  private columnsDefinitions: any[];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {

    this.configurarGrid();

    this.cityService.getCityGeneral(1, 1).subscribe(
      body => {
        this.cities = body;
      },
      error => alert(error)
    );
  }

  changeAdvancedFilterVisibility() {
    this.ShowAdvancedFilter = !this.ShowAdvancedFilter;
  }

  configurarGrid() {
    this.columnsHeaders = [{ title: 'idProvincia' }, { title: 'idMunicipio' }, { title: 'municipio' }, { title: 'deBaja' }, { title: 'region' }, { title: 'provincia' }, { title: 'Editar' }, { title: 'Eliminar' }]
    this.columnsDefinitions = [{
      targets: [0, 1, 4],
      visible: false,
      searchable: false
    },
    {
      className: "dt-center",
      targets: 6,
      data: null,
      defaultContent: '<a title="Plantas"><span class="fa fa-edit"></span></a>'
    },
    {
      className: "dt-center",
      targets: 7,
      data: null,
      defaultContent: ''
    }]
  }

}
