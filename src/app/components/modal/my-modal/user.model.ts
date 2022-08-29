export interface IUser {
  email?: String;
  userName?: String;
  password?: String;
  firstName?: String;
  lastName?: String;
  gender?: String;
  dateOfBirth?: Date;
  activeRate?: Number;
}

export class User implements IUser {
  constructor(
    public email?: String,
    public userName?: String,
    public password?: String,
    public firstName?: String,
    public lastName?: String,
    public gender?: String,
    public dateOfBirth?: Date,
    public activeRate?: Number
  ) {}
}
