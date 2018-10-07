import { BasicService } from './basic.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppConfig } from '../app.config';

@Injectable()
export class MenuService extends BasicService {
    constructor (private http: Http, private config: AppConfig) {
        super();
      }
  
      public getMenu(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({ headers: headers });
  
        return this.http.get(this.config.apiUrl + '/api/Menu/GetMenu', this.jwt())
                        .pipe(
                          map((response: Response) => response.json()),
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



