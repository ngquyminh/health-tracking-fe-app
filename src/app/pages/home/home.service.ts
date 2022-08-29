import { Injectable } from '@angular/core';
import moment from 'moment';
import { IStatisticRecord, IStep } from 'src/app/interfaces/conponents/ui';
import { EActivity, EStatisticRecord } from 'src/app/models/components/ui';
import { Helpers } from '../../helpers';

const EStatisticRecordArr = [
  EStatisticRecord.BLOOD_PRESSURE,
  EStatisticRecord.BLOOD_SUGAR,
  EStatisticRecord.HEART_RATE,
];
const EActivitydArr = [EActivity.CYCLING, EActivity.SLEEP, EActivity.OTHER];

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private helpers: Helpers) {}

  getFakeStatisticData() {
    const res: IStatisticRecord[] = EStatisticRecordArr.map((x) => ({
      type: x,
      record: this.helpers.getRandom(2, 200),
    }));
    return res;
  }

  getFakeActivityData() {
    const res: IStatisticRecord[] = [
      {
        type: EActivitydArr[0],
        record: this.helpers.getRandom(2, 200) / 100, //sleepRate
        startTime: moment().subtract(31, 'minutes').toString(),
        endTime: moment().toString(),
      },
      {
        type: EActivitydArr[1],
        record: this.helpers.getRandom(2, 200) / 100, // distance
        startTime: moment().subtract(489, 'minutes').toString(),
        endTime: moment().toString(),
      },
      {
        type: EActivitydArr[2],
        record: this.helpers.getRandom(2, 200) / 100, // distance
        activityTitle: 'Soccer',
        startTime: moment().subtract(132, 'minutes').toString(),
        endTime: moment().toString(),
      },
      {
        type: EActivitydArr[2],
        record: this.helpers.getRandom(2, 200) / 100, // distance
        activityTitle: 'Skiing',
        startTime: moment().subtract(82, 'minutes').toString(),
        endTime: moment().toString(),
      },
      {
        type: EActivitydArr[0],
        record: this.helpers.getRandom(2, 200) / 100, //sleepRate
        startTime: moment().subtract(31, 'minutes').toString(),
        endTime: moment().toString(),
      },
      {
        type: EActivitydArr[1],
        record: this.helpers.getRandom(2, 200) / 100, // distance
        startTime: moment().subtract(489, 'minutes').toString(),
        endTime: moment().toString(),
      },
      {
        type: EActivitydArr[2],
        record: this.helpers.getRandom(2, 200) / 100, // distance
        activityTitle: 'Soccer',
        startTime: moment().subtract(132, 'minutes').toString(),
        endTime: moment().toString(),
      },
      {
        type: EActivitydArr[2],
        record: this.helpers.getRandom(2, 200) / 100, // distance
        activityTitle: 'Skiing',
        startTime: moment().subtract(82, 'minutes').toString(),
        endTime: moment().toString(),
      },
    ];
    return res;
  }

  getFakeStepData(): IStep {
    return {
      step: this.helpers.getRandom(2, 200),
      kcal: this.helpers.getRandom(2, 200),
    };
  }
}
