import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  private ShowAdvancedFilter: boolean = false;
  private advancedFilter: any = { alcance: "-1", provincia: "-1", municipio: "-1", organismo: "", deBaja: "-1" }
  private companies: Array<any>;
  private columnsHeaders: any[];
  private columnsDefinitions: any[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.configurarGrid();

    this.companyService.getCompanyGeneral(1, false).subscribe(
      body => {
        this.companies = body;
      },
      error => alert(error)
    );
  }

  changeAdvancedFilterVisibility() {
    this.ShowAdvancedFilter = !this.ShowAdvancedFilter;
  }

  configurarGrid() {
    this.columnsHeaders = [{ title: 'idEmpresa' }, { title: 'idPais' }, { title: 'empresa' }, { title: 'deBaja' }, { title: 'editar' }, { title: 'plantas' }, { title: 'Eliminar' }]
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
      defaultContent: '<a title="Plantas"><span class="fa fa-map-marker"></span></a>'
    },
    {
      className: "dt-center",
      targets: 6,
      data: null,
      defaultContent: ''
    }
    ]
  }

}
