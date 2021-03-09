import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });

      return false;
    }
  }
}
