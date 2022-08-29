import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity-service/activity.service';
import { HealthRateService } from 'src/app/services/health-rate-service/health-rate.service';
import { IActivity } from '../modal/my-modal/activity.model';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  itemId: string = '';
  currentItem: IActivity = {};

  sleepRateOptions = [1, 2, 3, 4];
  onShowForm = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityService: ActivityService  ) {}

  ngOnInit(): void {
    this.getIdFromRouting();
    this.getActivityDataById(this.itemId);
  }

  getActivityDataById(activityId: string) {
    const req = {
      id: activityId
    }
    this.activityService
      .getActivityById(req)
      .subscribe((res: HttpResponse<IActivity>) => {
        if (res.body) {
          this.currentItem = res.body;
        }
        console.log('getItemById', this.currentItem);
        this.onShowForm = true;
      });
  }

  getIdFromRouting(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('params from visual', params);
      this.itemId = params.id;
    });
  }
}
