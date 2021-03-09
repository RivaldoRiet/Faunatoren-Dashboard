import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggedInUser } from 'src/app/shared/models/logged-in-user';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
// tslint:disable-next-line: prefer-function-over-method no-any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) as LoggedInUser;

        if (currentUser !== null) {
            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${currentUser.token}`)
            });
        }

        return next.handle(request);
    }
}
