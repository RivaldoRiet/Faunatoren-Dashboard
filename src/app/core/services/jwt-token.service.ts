import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class JwtTokenService {
  public hasValidToken(): boolean {
    const t = this.getToken();
    if (t === null || t === undefined || t === ''){
      // TODO: Actually check if the token is a correct jwt token.
      return false;
    }

    return true;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  }
}
