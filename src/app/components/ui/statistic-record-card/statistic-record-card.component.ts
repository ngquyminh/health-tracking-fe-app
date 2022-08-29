import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { IActivity1, IStatisticRecord } from 'src/app/interfaces/conponents/ui';
import { EActivity, EStatisticRecord } from 'src/app/models/components/ui';
import { StatisticRecordCardService } from './statistic-record-card.service';

@Component({
  selector: 'app-statistic-record-card',
  templateUrl: './statistic-record-card.component.html',
  styleUrls: ['./statistic-record-card.component.scss'],
})
export class StatisticRecordCardComponent implements OnInit, OnChanges {
  BLOOD_PRESSURE = EStatisticRecord.BLOOD_PRESSURE;
  BLOOD_SUGAR = EStatisticRecord.BLOOD_SUGAR;
  HEART_RATE = EStatisticRecord.HEART_RATE;
  SLEEP = EActivity.SLEEP;
  CYCLING = EActivity.CYCLING;
  OTHER = EActivity.OTHER;

  @Input() data?: IStatisticRecord | IActivity1;
  title?: string = '';
  record?: number = 0;
  content?: string = '';
  status?: string = '';
  type?: string = '';

  constructor(
    private statisticRecordCardService: StatisticRecordCardService,
    private router: Router
  ) {
    // this.statisticRecordCardService.formatData(this);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.data.currentValue?.['type'] !==
        changes.data.previousValue?.['type'] ||
      changes.data.currentValue?.['record'] !==
        changes.data.previousValue?.['record']
    ) {
      if (
        changes.data.currentValue['record'] &&
        changes.data.currentValue['type']
      ) {
        const { title, record, content, status, type }: IStatisticRecord =
          this.statisticRecordCardService.formatData(changes.data.currentValue);
        this.title = title;
        this.record = record;
        this.content = content;
        this.status = status;
        this.type = type;
        // console.log({ title, record, content, status, type });
      }
    }
  }

  onCardClick(): void {
    console.log('On click data: ', this.data);
    // this.router.navigateByUrl("/data-visual", { state: { id: this.data!.id }});
    this.router.navigate(['/data-visual'], {
      queryParams: {
        id: this.data!.id,
        activityType: this.data!.activityTitle,
      },
    });
  }
}
