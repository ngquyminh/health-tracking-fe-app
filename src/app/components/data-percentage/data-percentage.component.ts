import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-data-percentage',
  templateUrl: './data-percentage.component.html',
  styleUrls: ['./data-percentage.component.scss'],
})
export class DataPercentageComponent implements OnInit {
  myChart: any;

  constructor() {}

  ngOnInit(): void {
    this.generateMyChart();
  }

  generateMyChart(): void {
    const canvas = <HTMLCanvasElement>document.getElementById('myChart');
    const ctx = canvas.getContext('2d')!;
    // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';

    // const ctx1 = document.getElementById("myChart"); ctx1!.style.backgroundColor = 'white';

    this.myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['walking', 'cycling', 'running', 'soccer', 'sleep'],
        datasets: [
          {
            label: 'statistics',
            borderColor: 'rgba(95, 83, 68, 0.786)',
            data: [3, 2, 1, 1, 1],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              '#3cdddc','#c7ea46'
            ],
            // backgroundColor: 'rgba(168, 143, 111, 0.786)',
            // pointStyle: 'circle',
            // pointRadius: 10,
            // pointHoverRadius: 15,
          },
        ],
      },
      // Configuration options go here
      options: {},
    });
  }
}
