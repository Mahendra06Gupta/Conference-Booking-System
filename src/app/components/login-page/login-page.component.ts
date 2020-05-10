import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { RootState, LoadUserRegistered, UserLogged, GoToBooking, LoggedOutSuccessfully, LoggedInSuccessfully } from '@app/store';
import { UserData } from '@app/models/data.model';
import { ToastrService } from 'ngx-toastr';
import * as fromUserDataSelector from '@app/store/user-details/user-details.selectors';
import { first, tap } from 'rxjs/operators';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;
  public currentState = 'initial';
  public text = 'LOGIN';

  public spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'LOGIN',
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: 'warn',
    spinnerColor: 'warn',
    fullWidth: true,
    disabled: false,
    mode: 'indeterminate',
  };

  public readonly userData: UserData[] = [
    { name: 'Organizations1', id: 'O1', email: 'orga1@zmail.com', password: 'Orga1@123', type: 'Organizations', logged: false },
    { name: 'Admin1', id: 'A1', email: 'admin1@zmail.com', password: 'Admin1@123', type: 'Admin', logged: false },
    { name: 'Organizations2', id: 'O2', email: 'orga2@zmail.com', password: 'Orga2@123', type: 'Organizations', logged: false },
    { name: 'Admin2', id: 'A2', email: 'admin2@zmail.com', password: 'Admin2@123', type: 'Admin', logged: false },
  ];
  private userPresent = false;

  constructor(
    public readonly fb: FormBuilder,
    public readonly store$: Store<RootState>,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.store$.dispatch(new LoggedOutSuccessfully({loggedIn: false}));
    this.initForm();
    this.store$.dispatch(new LoadUserRegistered({userDetails: this.userData}));
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public onSubmit(): void {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    this.store$.select(fromUserDataSelector.getUserDetails).pipe(
      first(),
      tap((data) =>  {
        Object.keys(data).forEach(user => {
          if (
            data[user].email === this.loginForm.controls.emailId.value
            && data[user].password === this.loginForm.controls.password.value
          ) {
            this.userPresent = true;
            this.store$.dispatch(new UserLogged({id: data[user].id, logged: true}));
            this.store$.dispatch(new LoggedInSuccessfully({loggedIn: true}));
          }
        });
      }
    )).subscribe();
    if (!this.userPresent) {
      this.spinnerButtonOptions.active = true;
      setTimeout(() => {
        this.toastr.error('please check cred');
        this.spinnerButtonOptions.active = false;
      }, 500);
    } else {
      this.spinnerButtonOptions.active = true;
      setTimeout(() => {
        this.store$.dispatch(new GoToBooking());
        this.spinnerButtonOptions.active = false;
      }, 1000);
    }
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
