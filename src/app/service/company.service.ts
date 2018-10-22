import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: Http, private config: AppConfig) { }

  getCompanyGeneral(idPais: any, deBaja: any) {
    return this.http.get(this.config.apiUrl + '/api/company/ObtenerEmpresasBusquedaGeneral?idPais=' + idPais + '&deBaja=' + deBaja, this.jwt())
      .pipe(
        map((response: Response) => response.json())
      )
  }
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
