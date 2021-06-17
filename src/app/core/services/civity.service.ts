import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';
import { CivityObject } from 'src/app/shared/models/CivityObject';

@Injectable()
export class CivityService {
  private readonly baseUri: string = environment.api;
  constructor(public http: HttpClient) {}

  getCivityData(entity: string) {
    const encoded = encodeURIComponent("?fromDateTime=2021-06-09T18:50:21.925+02:00&toDateTime=2021-06-30T18:50:21.925+02:00&start=0&count=300");
   // const baseUrl = this.baseUri + entity + "?fromDateTime=2021-06-09T18%3A50%3A21.925%2B02%3A00&toDateTime=2021-06-30T18%3A50%3A21.925%2B02%3A00&start=0&count=300";
   console.log(encoded);
    const baseUrl = this.baseUri + entity + encoded;
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