import { BasicService } from './basic.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class PaisService extends BasicService {
    constructor (private http: Http, private config: AppConfig) {
        super();
      }
  
      public getPaises(): Observable<any> {  
        return this.http.get(this.config.apiUrl + '/api/Pais/GetPaises', this.jwt())
        .pipe(
          map(this.extractData),
          catchError(this.handleError)
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



