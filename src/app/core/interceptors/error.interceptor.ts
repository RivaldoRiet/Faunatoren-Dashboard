import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private readonly authenticationService: AuthenticationService) {}

  // tslint:disable-next-line: no-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const unauthorized = 401;

    return next.handle(request)
      .pipe(catchError((err: HttpErrorResponse) => {
        if (err.status === unauthorized) {
        // auto logout if 401 response returned from api
        this.authenticationService.logout();
        location.reload();
      }

      if (err.status === 0) {
        return throwError('Unknown error');
      }

      const error = err.error !== null ? err.error : err.statusText;

      return throwError(error);
    }));
  }
}
