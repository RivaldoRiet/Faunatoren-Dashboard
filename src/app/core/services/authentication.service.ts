import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { BaseApiService } from './base-api.service';
import { JwtTokenService } from './jwt-token.service';
import { ApiResponse } from 'src/app/shared/models/apiResponse';
import { LoggedInUser } from 'src/app/shared/models/logged-in-user';
import { JwtData } from 'src/app/shared/models/jwt-data';
import { Observable, of } from 'rxjs';
import { LoginInfo } from 'src/app/shared/models/login-info';
import { EMPTY } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private readonly http: BaseApiService, private readonly tokenService: JwtTokenService) { }

  login(loginInfo: LoginInfo): Observable<void> {
    return this.http.post<LoginInfo, string>('Authorization/Login', loginInfo)
      .pipe(map((res: ApiResponse<string>) => {
        // login successful if there's a jwt token in the response
        if (res !== null) {
          const jwtData: JwtData = jwt_decode(res.data);
          this.tokenService.setToken(res.data);
          const user: LoggedInUser = {
            email: jwtData.sub,
            token: res.data,
            roles: jwtData.roles,
            id: jwtData.userid
          };
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('currentUserEmail', JSON.stringify(loginInfo.email));
        }
      }));
  }


  login1(loginInfo: LoginInfo): Observable<void> {
    return EMPTY;
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserEmail');
    this.tokenService.removeToken();
  }

  public getUser(): LoggedInUser {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  public get loggedIn(): boolean {
    return this.tokenService.hasValidToken();
  }
}
