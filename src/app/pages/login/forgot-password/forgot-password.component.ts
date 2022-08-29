import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  @Output() onClickSignIn = new EventEmitter<any>();

  signIn(): void {
    this.onClickSignIn.emit();
  }
  forgotForm;
  emailErr: String = '';
  current = '1';
  timing = 0;

  get email() {
    return this.forgotForm.get('email')?.value;
  }

  constructor(
    private fb: FormBuilder,
    private forgotPassordService: ForgotPasswordService
  ) {
    this.forgotForm = this.fb.group({
      email: '',
    });
    setInterval(() => {
      if (this.timing !== 0) {
        this.timing = this.timing - 1;
      }
    }, 1000);
  }

  ngOnInit(): void {}

  sendCode() {
    this.timing = 60;
  }

  forgot() {
    if (this.current === '1') {
      const { email } = this.forgotForm.value;
      console.log({ email });
      const checking = this.forgotPassordService.checkingParams(email);
      if (checking.emailErr) {
        this.emailErr = checking.emailErr || '';
        return;
      }
      this.current = '2';
      this.sendCode();
    } else {
      this.verifyCode();
    }
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    console.log({ code });
  }

  private verifyCode() {}
}
