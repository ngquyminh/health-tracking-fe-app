import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-ct',
  templateUrl: './carousel-ct.component.html',
  styleUrls: ['./carousel-ct.component.scss']
})
export class CarouselCtComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
