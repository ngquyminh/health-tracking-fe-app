import { Injectable } from '@angular/core';
import { LoginHelpers } from 'src/app/helpers/login.helper';
import { CheckingSignUp } from 'src/app/interfaces/pages/home.interface';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private loginHp: LoginHelpers) {}

  checkingParams(
    email: String = '',
    password: String = '',
    confirmPassword: String = ''
  ): CheckingSignUp {
    if (!email) {
      return { emailErr: 'Email is empty!' };
    }
    if (!this.loginHp.isValidEmail(email)) {
      return { emailErr: 'Email format is incorrect!' };
    }
    if (!password) {
      return { passwordErr: 'Password is empty!' };
    }
    if (password !== confirmPassword)  {
      return { passwordErr: 'Confirm password is not match!' };
    }
    return {};
  }
}
