import { HttpResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/components/modal/my-modal/user.model';
import { UserService } from 'src/app/services/user-service/user.service';
import LocalStorageService from '../../../services/local-storage';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnChanges {
  @Output() onClickSignUp = new EventEmitter<any>();
  @Output() onClickForgot = new EventEmitter<any>();

  signInForm;
  usernameErr: String = '';
  passwordErr: String = '';

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
    private _router: Router,
    private signInService: SignInService,
    private userService: UserService
  ) {
    this.signInForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.signInForm.valueChanges.subscribe((signInForm) => {
      // this.usernameErr = '';
      // this.passwordErr = '';
    });
  }

  ngOnChanges(): void {}

  signUp(): void {
    this.onClickSignUp.emit();
  }

  forgot(): void {
    this.onClickForgot.emit();
  }

  onFormSubmit() {
    const { username, password } = this.signInForm.value;
    console.log({ username, password });
    const req = {
      userName: username,
      password
    }
    this.userService.login(req).subscribe(
      (res: HttpResponse<any>) => {
        console.log("HURRAY", res.body);
        const userId = res.body.data._id;
        const userName = res.body.data.userName;
        this.localStorageService.onLoginSuccess(userId, userName);
      },
      (err) => {
        console.log("ERRRRRRRRRRRRRRRRRR");
      }
    )

    this._router.navigate(['home']);
    // const checking = this.signInService.checkingParams(username, password);
    // if (checking.usernameErr || checking.passwordErr) {
    //   this.usernameErr = checking.usernameErr || '';
    //   this.passwordErr = checking.passwordErr || '';
    //   return;
    // }
    // this._router.navigate(['home']);

    // this.digitalcvSv
    //   .login(signInForm.username, signInForm.password)
    //   .subscribe((login: MutationResponse) => {
    //     // console.log({ login });
    //     try {
    //       if (login.isSuccess) {
    //         const saveData = {
    //           ...login?.data?.user,
    //           token: login?.data?.token,
    //           isSuccess: true,
    //         };
    //         this.localStorage.login(saveData);
    //         this.store.dispatch(new AuthActions.UpdateAuth(saveData));
    //         this._router.navigate(['home']);
    //       } else {
    //         alert('Incorrect username or password!');
    //       }
    //     } catch (error) {
    //       alert(error);
    //     }
    //   });
  }
}
