import { Injectable } from '@angular/core';
import moment from 'moment';
import { IActivity1, IStatisticRecord } from 'src/app/interfaces/conponents/ui';
import { EActivity, EStatisticRecord } from 'src/app/models/components/ui';

@Injectable({
  providedIn: 'root',
})
export class StatisticRecordCardService {
  constructor() {}

  private recordStatus(record: number = 0, min: number, max: number): string {
    if (!record) {
      return 'No data';
    }
    if (record >= min && record <= max) {
      return 'Normal';
    } else if (record < min) {
      return 'Low';
    } else {
      return 'High';
    }
  }

  formatData(data: IStatisticRecord = {}): IStatisticRecord | IActivity1 {
    // const data: IStatisticRecord = data || {};
    const { type, record, activityTitle, endTime, startTime, sleepRate } = data;
    let title = '';
    let content = '';
    let status = '';
    let newRecord = record;
    // let duration = moment(endTime).diff(moment(startTime), 'minutes');
    let duration = Math.floor(Math.random() * 200);
    switch (type) {
      case EStatisticRecord.BLOOD_PRESSURE:
        title = 'Blood Pressure';
        content = '/ 72 mmhg';
        status = this.recordStatus(record, 40, 140);
        break;
      case EStatisticRecord.BLOOD_SUGAR:
        title = 'Blood Sugar';
        content = 'mg / dL';
        status = this.recordStatus(record, 80, 180);
        break;
      case EStatisticRecord.HEART_RATE:
        title = 'Heart Rate';
        content = 'bpm';
        status = this.recordStatus(record, 75, 153);
        break;
      case EActivity.CYCLING:
        title = 'Cycling';
        content = 'km';
        status = `${duration} min${duration > 1 ? 's' : ''}`;
        break;
      case EActivity.SLEEP:
        title = 'Sleep';
        newRecord = record;
        content = `hour${duration > 1 ? 's' : ''}`;
        // if (newRecord >= 5 && newRecord <= 9) {
        //   status = 'Good';
        // } else {
        //   status = 'Not Good';
        // }
        // status += ' - ' + (sleepRate || '3.4');
        status = `Rate: ${3}`;
        break;
      case EActivity.OTHER:
        title = activityTitle || '';
        content = 'steps';
        status = `${duration} min${duration > 1 ? 's' : ''}`;
        break;
      default:
        break;
    }
    return { type, record: newRecord, title, content, status };
  }
}
