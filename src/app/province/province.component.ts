import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  private columnsHeaders: any[];
  private columnsDefinitions: any[];
  private provincias: Array<any>;
  private ShowAdvancedFilter: boolean = false;

  constructor(private provinceService: ProvinceService) { }

  ngOnInit() {
    this.configurarGrid();

    this.provinceService.getProvincias(1, null).subscribe(
      body => {
        this.provincias = body;
      },
      error => alert(error)
    );
  }

  configurarGrid() {
    this.columnsHeaders = [{ title: 'IDRProvincia' }, { title: 'IDRegion' }, { title: 'Provincia' }, { title: 'DeBaja' }, { title: 'Region' }, { title: 'Editar' }, { title: 'Eliminar' }]
    this.columnsDefinitions = [{
      targets: [0, 1],
      visible: false,
      searchable: false
    },
    {
      className: "dt-center",
      targets: 5,
      data: null,
      defaultContent: '<a title="Plantas"><span class="fa fa-edit"></span></a>'
    },
    {
      className: "dt-center",
      targets: 6,
      data: null,
      defaultContent: ''
    }]
  }

  changeAdvancedFilterVisibility() {
    this.ShowAdvancedFilter = !this.ShowAdvancedFilter;
  }

}
