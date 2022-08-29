import { Injectable } from '@angular/core';
import { LoginHelpers } from 'src/app/helpers/login.helper';
import { CheckingForgot } from 'src/app/interfaces/pages/home.interface';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private loginHp: LoginHelpers) {}

  checkingParams(email: string): CheckingForgot {
    if (!email) {
      return { emailErr: 'Email is empty!' };
    }
    if (!this.loginHp.isValidEmail(email)) {
      return { emailErr: 'Email format is incorrect!' };
    }
    return {};
  }
}
