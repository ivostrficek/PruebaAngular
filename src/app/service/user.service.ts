import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl + '/api/user/ObtenerUsuarios', this.jwt())
          .pipe(
            map((response: Response) => response.json())
          )          
    }

    getFilteredUser(filtro: any) {
        return this.http.post(this.config.apiUrl + '/api/user/FiltrarUsuarios', filtro, this.jwt())
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