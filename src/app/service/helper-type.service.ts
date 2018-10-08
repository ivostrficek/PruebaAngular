import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';

@Injectable()
export class HelperTypeService {
    constructor(private http: Http, private config: AppConfig) { }

    getUserTypes() {
        return this.http.get(this.config.apiUrl + '/api/helpertype/ObtenerTiposUsuario', this.jwt())
            .pipe(
              map((response: Response) => response.json())
            )            
    }

    getAlcances() {
        return this.http.get(this.config.apiUrl + '/api/helpertype/ObtenerAlcances', this.jwt())
          .pipe(
            map((response: Response) => response.json())
          )            
    }

    getProvinciasCombo(idAlcance : any){
        return this.http.get(this.config.apiUrl + '/api/helpertype/ObtenerProvinciasCombo?IdAlcance=' + idAlcance , this.jwt())
        .pipe(
          map((response: Response) => response.json())
        )
    }

    getMunicipiosCombo(idAlcance : any, idProvincia : any){
        return this.http.get(this.config.apiUrl + '/api/helpertype/ObtenerMunicipiosCombo?IdAlcance=' + idAlcance + '&IdProvincia=' + idProvincia , this.jwt())
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