import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  EMaterialItemStatus,
  Ilevel,
  ILocation,
  IMaterialItem,
} from './test-model.model';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss'],
})
export class TestModalComponent implements OnInit, AfterViewInit {
  levels = [1, 2, 3].map((x) => ({
    name: `Level ${x}`,
    completed: false,
    color: 'primary',
  }));
  componentPriorityData = ['Important Component', 'All Components'];
  componentPriority: string = this.componentPriorityData[0];
  searchMaterial: string = '';
  materials: ILocation[] = [...Array(12).keys()].map((x) => ({
    partNumber: `1231.123.${x}`,
    description: 'ABC',
    status: EMaterialItemStatus.A,
    quantity: 150,
    level1: [...Array(1).keys()].map((x) => ({
      name: `P123${x}`,
      available: 5,
      upcomingStock: 50,
      previousDemand: -150,
      total: 50,
    })),
    level2: [...Array(3).keys()].map((x) => ({
      name: `Storage Type ID: ${x + 1800}`,
      available: 5,
      upcomingStock: 50,
      previousDemand: -150,
      total: 50,
    })),
    level3: [...Array(2).keys()].map((x) => ({
      name: `P${x + 1200}`,
      available: 5,
      upcomingStock: 50,
      previousDemand: -150,
      total: 50,
    })),
  }));
  selectedMaterial: ILocation = {};
  materialLevels: Ilevel[][] = [];
  materialListWidth = '400px';

  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }) {}

  ngOnInit(): void {}

  cancel() {}

  onResized(event: any): void {
    console.log({ event });
  }

  ngAfterViewInit() {
    const materialList = document.getElementById('materialList');
    if (materialList) {
      // console.log({ clientWidth: materialList.clientWidth, materialList });
      this.materialListWidth = materialList.clientWidth - 24 + 'px';
    }
  }

  materialItemClick(item: ILocation = {}) {
    if (
      item.partNumber &&
      item.partNumber !== this.selectedMaterial.partNumber
    ) {
      Object.assign(this.selectedMaterial, { ...item });
      this.materialLevels = [];
      if (this.selectedMaterial.level1) {
        this.materialLevels.push(this.selectedMaterial.level1);
      }
      if (this.selectedMaterial.level2) {
        this.materialLevels.push(this.selectedMaterial.level2);
      }
      if (this.selectedMaterial.level3) {
        this.materialLevels.push(this.selectedMaterial.level3);
      }
      console.log({
        selectedMaterial: this.selectedMaterial,
        materialLevels: this.materialLevels,
      });
    }
  }
}
