import { IActivity } from '../components/modal/my-modal/activity.model';
import { IActivity1, IStatisticRecord } from '../interfaces/conponents/ui';
import { EActivity, EStatisticRecord } from '../models/components/ui';

export default class MyUtils {
  static aggregateNewActivityToStatRecord(
    newActivity: IActivity
  ): IStatisticRecord {
    let type = EActivity.SLEEP;
    let record = this.getRndInteger(6, 9);
    if (newActivity.activityType === 'biking') {
      type = EActivity.CYCLING;
      record = newActivity.duration!;
    } else if (
      newActivity.activityType === 'walking' ||
      newActivity.activityType === 'running' ||
      newActivity.activityType === 'soccer'
    ) {
      type = EActivity.OTHER;
      record = newActivity.step!;
    }
    const oldActivity: IStatisticRecord = {
      id: newActivity._id,
      type: type,
      record: record,
      startTime: newActivity.startedTime!,
      endTime: newActivity.endedTime!,
      activityTitle: this.capitalizeFirstLetter(newActivity.activityType),
    };
    return oldActivity;
  }

  static capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
