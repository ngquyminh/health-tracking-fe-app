export interface IActivity {
  _id?: string;
  activityType?: string;
  startedTime?: string;
  endedTime?: string;
  duration?: number;
  step?: number;
  sleepRate?: number;
  sleepHour?: number;
  tripA?: string;
  tripB?: string;
  user?: string;
}

export class Activity implements IActivity {
  constructor(
    public _id?: string,
    public activityType?: string,
    public startedTime?: string,
    public endedTime?: string,
    public duration?: number,
    public step?: number,
    public sleepRate?: number,
    public sleepHour?: number,
    public tripA?: string,
    public tripB?: string,
    public user?: string
  ) {}
}

export class ResponseActivityList {
  constructor(public data?: IActivity[]) {}
}
