import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';
import { CivityObject } from 'src/app/shared/models/CivityObject';

@Injectable()
export class CivityService {
  private readonly baseUri: string = environment.api;
  constructor(public http: HttpClient) {}

  getCivityData(entity: string, amountOfRecords : number) {
    let endDate : Date = new Date();
    let hourAgo : Date = new Date();
    hourAgo.setHours(hourAgo.getHours() - 1);
    var monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);

    const fromDate = encodeURIComponent("2021-06-09T18:50:21.925+02:00");
   // const toDate = encodeURIComponent("2021-06-29T18:50:21.925+02:00");
   const toDate = encodeURIComponent(this.getDateTime(endDate));

    const encoded = "?fromDateTime=" + fromDate + "&toDateTime=" + toDate + "&start=0&count=" + amountOfRecords;
   const baseUrl = this.baseUri + entity + encoded;
   console.log(baseUrl);
    return this.http.get<CivityObject>(baseUrl, { headers: this.getRequestHeaders() });
  }

  private getDateTime(now)
  {
    var year:any    = now.getFullYear();
    var month:any   = now.getMonth()+1; 
    var day:any     = now.getDate();
    var hour:any    = now.getHours();
    var minute:any  = now.getMinutes();
    var second:any  = now.getSeconds(); 
    if(month.toString().length == 1) {
          month = '0'+month;
    }
    if(day.toString().length == 1) {
          day = '0'+day;
    }   
    if(hour.toString().length == 1) {
          hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
          minute = '0'+minute;
    }
    if(second.toString().length == 1) {
          second = '0'+second;
    }   
    var dateTime = year+'-'+month+'-'+day+'T'+hour+':'+minute+':'+"21.925+02:00";
    console.log(dateTime);
    return dateTime;
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