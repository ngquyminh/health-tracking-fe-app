import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-card',
  templateUrl: './bmi-card.component.html',
  styleUrls: ['./bmi-card.component.scss'],
})
export class BmiCardComponent implements OnInit {
  bmiSlider = [15, 20, 25, 30, 35, 40];
  height = 179;
  weight = 75;
  rate = Math.round((this.weight / Math.pow(this.height / 100, 2)) * 100) / 100;
  status = this.rate
    ? this.rate >= 18.5 && this.rate <= 24.9
      ? 'Healthy'
      : 'Un-Healthy'
    : 'OK';
  calculatedLeft = this.rate * 13.64 - 211.6 + 'px';

  constructor() {}

  ngOnInit(): void {}

  onCardClick() {
    console.log('{ data: this.data }');
  }
}
