export interface CheckingSignIn {
  emailErr?: String;
  passwordErr?: String;
}

export interface CheckingSignUp {
  emailErr?: String;
  passwordErr?: String;
  confirmPasswordErr?: String;
}

export interface CheckingForgot {
  emailErr?: String;
}
