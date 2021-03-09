import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JwtTokenService } from './jwt-token.service';
import { ApiResponse } from 'src/app/shared/models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private readonly baseUri: string = environment.api;

  constructor(public http: HttpClient, private readonly tokenService: JwtTokenService) {
  }

  public get<T>(url: string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(this.getUri(url), { headers: this.getRequestHeaders() });
  }

  public put<TBody, TOut>(url: string, body: TBody): Observable<ApiResponse<TOut>> {
    return this.http.put<ApiResponse<TOut>>(this.getUri(url), body, { headers: this.getRequestHeaders() });
  }

  public post<TBody, TOut>(url: string, body: TBody): Observable<ApiResponse<TOut>> {
    return this.http.post<ApiResponse<TOut>>(this.getUri(url), body, { headers: this.getRequestHeaders() });
  }

  public delete(url: string): Observable<object> {
    return this.http.delete(this.getUri(url), { headers: this.getRequestHeaders() });
  }

  public deleteBody<TBody, TOut>(url: string, deletebody: TBody): Observable<ApiResponse<TOut>> {
    return this.http.request<ApiResponse<TOut>>('delete', this.getUri(url), { body: deletebody, headers: this.getRequestHeaders() });
  }

  /**
   * Gets the authorization header if the token is set.
   */
  private getRequestHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    const token = this.tokenService.getToken();

    if (token !== null) {
      headers.append('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  /**
   * Gets the url appending the base uri before it.
   * @param url The (relative) uri.
   */
  private getUri(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }

    if (url.startsWith('/')) {
      url = url.substr(0, 1);
    }

    return `${this.baseUri}${url}`;
  }
}
