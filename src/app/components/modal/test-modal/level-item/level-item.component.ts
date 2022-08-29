import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ilevel, IStockValue } from '../test-model.model';

@Component({
  selector: 'app-level-item',
  templateUrl: './level-item.component.html',
  styleUrls: ['./level-item.component.scss'],
})
export class LevelItemComponent implements OnInit, OnChanges {
  @Input() data: Ilevel = {
    name: '',
    available: 0,
    upcomingStock: 0,
    previousDemand: 0,
    total: 0,
  };
  @Input() level: number = 0;
  values: IStockValue[] = [];
  constructor() {}

  getStockColor(value: number): string {
    return value < 50 ? 'RED' : 'GREEN';
  }

  ngOnInit(): void {
    const { available, upcomingStock, previousDemand } = this.data || {};
    const availableObj = {
      color: this.getStockColor(available),
      value: available,
      title: 'Available Stock: ',
    };
    const upcomingStockObj = {
      color: this.getStockColor(upcomingStock),
      value: upcomingStock,
      title: 'Upcoming Stock: ',
    };
    const previousDemandObj = {
      color: this.getStockColor(previousDemand),
      value: previousDemand,
      title: 'Previous Demand: ',
    };
    switch (this.level) {
      case 1:
        this.values = [availableObj, upcomingStockObj, previousDemandObj];
        break;
      case 2:
        this.values = [availableObj];

        break;
      case 3:
        this.values = [upcomingStockObj, previousDemandObj];
        break;
      default:
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
