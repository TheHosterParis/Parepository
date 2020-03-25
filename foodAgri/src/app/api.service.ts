import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = 'https://alim-pprd.agriculture.gouv.fr/ift-api/api';
  baseURLRepo = 'https://api.github.com/';
  culture = '/cultures';


  public getCultures() {
    return this.httpClient.get(`https://alim-pprd.agriculture.gouv.fr/ift-api/api/cultures`);
  }

  public getRepos(userName: string): Observable<any> {
    return this.httpClient.get(this.baseURLRepo + 'users/' + userName + '/repos')
  }
  constructor(private httpClient: HttpClient) { }


}
