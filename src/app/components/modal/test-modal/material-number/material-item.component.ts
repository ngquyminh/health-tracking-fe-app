import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  EMaterialItemStatus,
  Ilevel,
  IMaterialItem,
} from '../test-model.model';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.scss'],
})
export class MaterialItemComponent implements OnInit, OnChanges {
  @Input() data?: IMaterialItem = {};
  @Input() lvData?: Ilevel[] = [];
  @Input() isSelected = false;
  @Input() level: number = 0;
  @Output() materialItemClick = new EventEmitter<any>();
  partNumber?: string = '';
  description?: string = '';
  status?: EMaterialItemStatus = EMaterialItemStatus.A;
  quantity?: number = 0;
  levelTitle?: string = '';
  total: number = 0;
  toggleDetail: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  updateDataProp(currentValue: IMaterialItem, previousValue: IMaterialItem) {
    if (
      currentValue.partNumber !== previousValue.partNumber ||
      currentValue.description !== previousValue.description ||
      currentValue.status !== previousValue.status ||
      currentValue.quantity !== previousValue.quantity
    ) {
      const { partNumber, description, quantity, status } = currentValue;
      this.partNumber = partNumber;
      this.description = description;
      this.status = status;
      this.quantity = quantity;
    }
  }

  updateSelectedProp(isSelected: boolean, previousValue: boolean) {
    if (isSelected !== previousValue) {
      this.isSelected = isSelected;
    }
  }

  updateLevelProp(changes: SimpleChanges) {
    if (changes.level?.currentValue !== changes.level?.previousValue) {
      this.level = changes.level?.currentValue;
      this.lvData = changes.lvData?.currentValue || {};
      switch (this.level) {
        case 1:
          this.levelTitle = 'Level 1: Transport Destination PSA';
          break;
        case 2:
          this.levelTitle = 'Level 2: Pre-production PSAs';
          break;
        case 3:
          this.levelTitle = 'Level 3: Warehouse';
          break;
        default:
          break;
      }
      this.total = 0;
      this.lvData
        ?.map((x) => x.total)
        .forEach((x) => {
          this.total += x || 0;
        });

      console.log({ level: this.level, lvData: this.lvData });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDataProp(
      changes.data?.currentValue || {},
      changes.data?.previousValue || {}
    );
    this.updateSelectedProp(
      changes.isSelected?.currentValue,
      changes.isSelected?.previousValue
    );
    this.updateLevelProp(changes);
  }

  onClickMaterialItem(): void {
    this.materialItemClick.emit(this.data);
    if (this.level !== 0) {
      this.toggleDetail = !this.toggleDetail;
    }
  }
}
