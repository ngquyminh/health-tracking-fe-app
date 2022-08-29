import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import FetchServices from 'src/app/apollo/fetch-services';
import { IAddFoodInput } from 'src/app/apollo/models/mutations';
import MutationServices from 'src/app/apollo/mutation-services';
import {
  IActivity,
  ResponseActivityList,
} from 'src/app/components/modal/my-modal/activity.model';
import {
  IActivity1,
  IStatisticRecord,
  IStep,
} from 'src/app/interfaces/conponents/ui';
import { ActivityService } from 'src/app/services/activity-service/activity.service';
import { HomeService } from './home.service';
import MyUtils from 'src/app/utils/MyUtils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = true;
  menu: any[] = [];
  statisticRecords: IStatisticRecord[] = [];
  stepData: IStep = {};
  activities: IStatisticRecord[] = [];
  activitiesByType: IActivity1[] = [];
  userActivities: IActivity[] = [];
  userId = localStorage.getItem('userId')
    ? localStorage.getItem('userId')
    : '62fd197f1b05e75265052dd6';

  constructor(
    private fetchServices: FetchServices,
    private mutationServices: MutationServices,
    private homeService: HomeService,
    private _router: Router,
    private activityService: ActivityService
  ) {
    // this.getUserActivitiesByType('62fd197f1b05e75265052dd6', 'walking');
    this.getAllUserActivities(this.userId);
    this.loadMenu();
    this.loading = false;
    this.statisticRecords = this.homeService.getFakeStatisticData();
    // this.activities = this.homeService.getFakeActivityData();
    this.stepData = this.homeService.getFakeStepData();
    //   setInterval(() => {
    //     this.statisticRecords = this.homeService.getFakeStatisticData();
    //     this.stepData = this.homeService.getFakeStepData();
    //   this.activities = this.homeService.getFakeActivityData();
    // }, 4000);
    console.log({ statisticRecords: this.statisticRecords });
  }

  ngOnInit(): void {}

  private loadMenu() {
    this.fetchServices.getMenu().subscribe((menu) => {
      this.menu = menu;
    });
  }

  getUserActivitiesByType(userId: String, activityType: String) {
    const req = {
      userId,
      activityType,
    };
    this.activityService
      .getActivitiesByUserIdAndType(req)
      .subscribe((res: HttpResponse<ResponseActivityList>) => {
        console.log('the response', res.body);
        const activityList = res.body?.data;
        if (activityList) {
          for (let i = 0; i < 5; i++) {
            this.activitiesByType.push(activityList[i]);
          }
        }
        console.log('only need this', this.activitiesByType);
      });
  }

  getAllUserActivities(userId: any) {
    const req = {
      userId,
    };
    this.activityService
      .getAllActivities(req)
      .subscribe((res: HttpResponse<ResponseActivityList>) => {
        console.log('all user activities', res.body);
        const activityList = res.body?.data;
        if (activityList) {
          for (let i = 0; i < 8; i++) {
            this.userActivities.push(activityList[i]);
          }
        }
        console.log('all i need', this.userActivities);

        // test, remove later
        for (let i = 0; i < this.userActivities.length; i++) {
          this.activities.push(
            MyUtils.aggregateNewActivityToStatRecord(this.userActivities[i])
          );
        }
      });
  }

  addFood() {
    const data: IAddFoodInput[] = [
      {
        title: 'Seafood test',
        name: 'Lobster test',
        price: 1200000,
        rating: 3,
      },
      {
        title: 'Seafood test',
        name: 'Crab test',
        price: 200000,
        rating: 3,
      },
    ];
    this.mutationServices.handleAddFood(data).subscribe((res) => {
      console.log({ res });
    });
  }

  syncData() {
    console.log('first');
  }

  onClickChartData() {
    this._router.navigate(['chart']);
  }
}
