export interface IHealthRate {
  weight?: Number;
  height?: Number;
  bmiRate?: Number;
  createdDate?: Date;
}

export class HeartRate implements IHealthRate {
  constructor(
    public weight?: Number,
    public height?: Number,
    public bmiRate?: Number,
    public createdDate?: Date
  ) {}
}
