import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { ClrLoadingState } from '@clr/angular';
import { ApiResponse } from 'src/app/shared/models/apiResponse';
import { LoginInfo } from 'src/app/shared/models/login-info';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public loginBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  returnUrl: string;

  public hasErrors: boolean = false;
  public errorMsg: string = '';
  public errorDetails: string = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    const returnUrl = this.route.snapshot.queryParams.returnUrl as string;
    this.returnUrl = returnUrl !== null ? returnUrl : '/';
  }

  onSubmit(): void {
  if (this.loginForm.invalid) {
      return;
    }

  
    this.loginBtnState = ClrLoadingState.LOADING;
    const loginInfo = this.loginForm.value as LoginInfo;
    this.hasErrors = false;

    this.authenticationService.login(loginInfo)
      .subscribe(
        async () => {
          this.loginBtnState = ClrLoadingState.SUCCESS;
          await this.router.navigateByUrl(this.returnUrl);
        },
        (error: ApiResponse<string>) => {
          this.errorMsg = error.errorMessage;
          this.hasErrors = true;
          this.errorDetails = error.errorDetails;

          this.loginBtnState = ClrLoadingState.ERROR;
        });

        
  } 
}
