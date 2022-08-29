import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPercentageComponent } from './data-percentage.component';

describe('DataPercentageComponent', () => {
  let component: DataPercentageComponent;
  let fixture: ComponentFixture<DataPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
