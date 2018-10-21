import { Component, OnInit } from '@angular/core';
import { HelperTypeService } from '../service';
import { OrganismsService } from '../service/organisms.service';

@Component({
  selector: 'app-adminorganism',
  templateUrl: './adminorganism.component.html',
  styleUrls: ['./adminorganism.component.css']
})
export class AdminorganismComponent implements OnInit {

  private ShowAdvancedFilter: boolean = false;
  private advancedFilter: any = { alcance: "-1", provincia: "-1", municipio: "-1", organismo: "", deBaja: "-1" }
  private Organismos: Array<any>;
  private alcances: Array<any>;
  private provincias: Array<any>;
  private municipios: Array<any>;
  private columnsHeaders: any[];
  private columnsDefinitions: any[];

  constructor(private organismsService: OrganismsService, private helperTypeService: HelperTypeService) {
  }

  ngOnInit() {

    this.configurarGrid();

    this.organismsService.getAll().subscribe(
      body => {
        this.Organismos = body;
      },
      error => alert(error)
    );

    this.helperTypeService.getAlcances().subscribe(
      body => {
        this.alcances = body;
      },
      error => alert(error)
    );
  }

  changeAdvancedFilterVisibility() {
    this.ShowAdvancedFilter = !this.ShowAdvancedFilter;
  }

  seleccionAlcance(event: any) {
    this.advancedFilter.provincia = -1;
    this.advancedFilter.municipio = -1;
    this.advancedFilter.alcance = event;
    this.helperTypeService.getProvinciasCombo(event).subscribe(
      body => {
        this.provincias = body;
      },
      error => alert(error)
    );
  }

  seleccionProvincia(event: any) {
    this.advancedFilter.municipio = -1;
    this.advancedFilter.provincia = event;
    if (this.advancedFilter.alcance !== -1) {
      this.helperTypeService.getMunicipiosCombo(this.advancedFilter.alcance, event).subscribe(
        body => {
          this.municipios = body;
        },
        error => alert(error)
      );
    }
  }

  configurarGrid() {
    this.columnsHeaders = [{ title: 'idOrganismo' }, { title: 'abreviatura' }, { title: 'Organismo' }, { title: 'Alcance' }, { title: 'Provincia' }, { title: 'Municipio' }, { title: 'De Baja' }, { title: 'Editar' }, { title: 'Eliminar' }]
    this.columnsDefinitions = [{
      targets: [0, 1],
      visible: false,
      searchable: false
    },
    {
      className: "dt-center",
      targets: 7,
      data: null,
      defaultContent: '<a title="Plantas"><span class="fa fa-edit"></span></a>'
    },
    {
      className: "dt-center",
      targets: 8,
      data: null,
      defaultContent: ''
    }]
  }
}

