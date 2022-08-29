import { Injectable } from '@angular/core';
import { LoginHelpers } from 'src/app/helpers/login.helper';
import { CheckingSignIn } from 'src/app/interfaces/pages/home.interface';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private loginHp: LoginHelpers) {}

  checkingParams = (
    email: String = '',
    password: String = ''
  ): CheckingSignIn => {
    if (!email) {
      return { emailErr: 'Email is empty!' };
    }
    if (!this.loginHp.isValidEmail(email)) {
      return { emailErr: 'Email format is incorrect!' };
    }
    if (!password) {
      return { passwordErr: 'Password is empty!' };
    }
    return {};
  };
}
