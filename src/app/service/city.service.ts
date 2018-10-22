import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: Http, private config: AppConfig) { }

  getCityGeneral(idPais: any, idRegion: any) {
    return this.http.get(this.config.apiUrl + '/api/city/ObtenerMunicipiosBusquedaGeneral?idPais=' + idPais + '&idRegion=' + idRegion, this.jwt())
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
