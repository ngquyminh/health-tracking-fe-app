import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IStep } from 'src/app/interfaces/conponents/ui';

const SMOOTH_TIME = 1200;

@Component({
  selector: 'app-step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss'],
})
export class StepCardComponent implements OnInit, OnChanges, OnDestroy {
  step: number = 0;
  kcal: number = 0;
  stepNew: number = 0;
  kcalNew: number = 0;
  @Input() data?: IStep;
  stepInterval: any;
  kcalInterval: any;

  constructor() {}

  private updateData(currentValue: IStep) {
    this.step = 0;
    this.kcal = 0;
    const { kcal, step } = currentValue;
    this.stepNew = step || 0;
    this.kcalNew = kcal || 0;
    // console.log({ kcal, step });
    this.stepInterval = setInterval(() => {
      if (step && this.step < this.stepNew) {
        this.step += 1;
      }
    }, SMOOTH_TIME / (step || 1));
    this.kcalInterval = setInterval(() => {
      if (kcal && this.kcal < this.kcalNew) {
        this.kcal += 1;
      }
    }, SMOOTH_TIME / (kcal || 1));
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const currentValue: IStep = changes.data.currentValue || {};
    const previousValue: IStep = changes.data.previousValue || {};
    if (
      currentValue.step !== previousValue.step ||
      currentValue.kcal !== previousValue.kcal
    ) {
      this.updateData({ ...currentValue });
    }
  }

  ngOnDestroy() {
    if (this.stepInterval) {
      console.log('a');
      clearInterval(this.stepInterval);
    }
    if (this.kcalInterval) {
      console.log('b');
      clearInterval(this.kcalInterval);
    }
  }

  onCardClick() {
    console.log({ data: this.data });
  }
}
