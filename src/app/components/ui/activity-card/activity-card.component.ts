import { Component, OnInit } from '@angular/core';
import { EActivity } from 'src/app/models/components/ui';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {
  SLEEP = EActivity.SLEEP;
  CYCLING = EActivity.CYCLING;
  type: string = 'SLEEP';
  title: string = 'Sleep';
  constructor() {}

  ngOnInit(): void {}
}
