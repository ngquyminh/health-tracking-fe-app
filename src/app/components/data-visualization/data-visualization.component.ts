import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import moment from 'moment';
import { ActivityService } from 'src/app/services/activity-service/activity.service';
import { HealthRateService } from 'src/app/services/health-rate-service/health-rate.service';
import { ResponseActivityList } from '../modal/my-modal/activity.model';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss'],
})
export class DataVisualizationComponent implements OnInit {
  myChart: any;
  dataInTimeRange: any[] = [];

  itemId: string = '';
  itemType: string = '';

  chosenStartedDate: string = '2022-05-24'; //initalize for first api call
  chosenEndedDate: string = '2022-12-30';

  userId = '62fd197f1b05e75265052dd6';

  // @Input() activityId: string | undefined;

  ngOnInit(): void {
    this.getIdFromRouting();
    this.getActivityDataInTimeRange(this.userId); // TODO
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private activityService: ActivityService,
    private healthRateService: HealthRateService // private _snackBar: MatSnackBar
  ) {}

  getIdFromRouting(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('params from visual', params);
      this.itemId = params.id;
      this.itemType = params.activityType;
      console.log('GET?', this.itemType);
    });
  }

  getActivityDataInTimeRange(userId: string) {
    this.dataInTimeRange = [];
    const req = {
      userId,
      activityType: this.itemType.toLowerCase(),
      startedTime: this.chosenStartedDate,
      endedTime: this.chosenEndedDate,
    };
    this.activityService
      .getAtivitiesByTypeInTimeRange(req)
      .subscribe((res: HttpResponse<ResponseActivityList>) => {
        const data = res.body?.data;
        console.log('data', res.body);
        if (data && data !== null) {
          for (let i = 0; i < 7; i++) {
            if (data[i] === undefined || !data[i]) {
              break;
            }
            this.dataInTimeRange.push(data[i]);
          }
          console.log('data in time range', this.dataInTimeRange);
        } else {
          console.log('NO DATA FROM BE');
        }

        // if (this.dataInTimeRange.length === 0) {
        //   this._snackBar.open('No data from this time range!', 'Undo', {
        //     duration: 3000
        //   });
        // }
        this.generateMyChart();
      });
  }

  extractNumberDataToDisplay(itemList: any[]): number[] {
    let numberList = [];
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].activityType === 'sleeping') {
        numberList.push(itemList[i].sleepHour ? itemList[i].sleepHour : 0);
      } else {
        numberList.push(itemList[i].step);
      }
    }
    return numberList;
  }

  extractDateDataToDisplay(itemList: any[]): string[] {
    let dateList = [];
    for (let i = 0; i < itemList.length; i++) {
      dateList.push(itemList[i].startedTime.slice(0, 10));
    }
    return dateList;
  }

  generateMyChart(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('myChart');
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';

    // const ctx1 = document.getElementById("myChart"); ctx1!.style.backgroundColor = 'white';

    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.extractDateDataToDisplay(this.dataInTimeRange),
        datasets: [
          {
            label: this.itemType + ' statistics',
            borderColor: 'rgba(95, 83, 68, 0.786)',
            data: this.extractNumberDataToDisplay(this.dataInTimeRange),
            // backgroundColor: 'rgba(168, 143, 111, 0.786)',
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
          },
        ],
      },
      // Configuration options go here
      options: {
        onClick: function (evt, activeElements: any) {
          if (activeElements.length === 0) {
            return;
          }
          console.log('index:', activeElements[0]._index);
        },
        legend: {
          labels: {
            fontColor: '#B25068',
            fontSize: 18,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: '#B25068',
                fontSize: 14,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: '#B25068',
                fontSize: 14,
              },
            },
          ],
        },
      },
    });
  }

  onStartedDateChange(event: any) {
    this.chosenStartedDate = moment(event.value).format('YYYY-MM-DD');
    console.log('start:', this.chosenStartedDate);
  }

  onEndedDateChange(event: any) {
    this.chosenEndedDate = moment(event.value).format('YYYY-MM-DD');
    console.log('end:', this.chosenEndedDate);
  }
}
