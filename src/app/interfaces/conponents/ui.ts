import { EActivity, EStatisticRecord } from 'src/app/models/components/ui';

export interface IActivity1 {
  id?: string;
  type?: EActivity | EStatisticRecord;
  startTime?: string;
  endTime?: string;
  sleepRate?: Number;
  tripLocationFrom?: string;
  tripLocationTo?: string;
  tripType?: string;
  distance?: number;
  activityTitle?: string;
}
export interface IStatisticRecord extends IActivity1 {
  id?: string;
  title?: string;
  record?: number;
  content?: string;
  status?: string;
}
export interface IStep {
  step?: number;
  kcal?: number;
}
