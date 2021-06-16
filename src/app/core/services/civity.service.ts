import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';

@Injectable()
export class CivityService {
  private readonly baseUri: string = environment.api;
  constructor(public http: HttpClient) {}

  getCivityData(entity: string) {
    const baseUrl = this.baseUri + entity + "?fromDateTime=2021-06-09T18%3A50%3A21.925%2B02%3A00&toDateTime=2021-06-30T18%3A50%3A21.925%2B02%3A00&start=0&count=10";
    return this.http.get<CivityObject>(baseUrl, { headers: this.getRequestHeaders() });
  }
   /**
   * Gets the authorization header if the token is set.
   */
    private getRequestHeaders(): HttpHeaders {
        const headers = new HttpHeaders();
        const token = environment.token;
    
        if (token !== null) {
          headers.append('X-Gravitee-Api-Key', `${token}`);
        }
    
        return headers;
      }
  
}


export class CivityObject {
    id?:          string;
    type?:         string;
    dataProvider?:  string;
    dateModified?: string;
    dateCreated?: string;
    dateObserved?: string;
    source?: string;
    species?: any;
  }