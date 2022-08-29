import { Injectable } from '@angular/core';


export const LOGIN_DATA= {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
}
const {SIGN_IN,SIGN_UP, FORGOT_PASSWORD}=LOGIN_DATA;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
}
