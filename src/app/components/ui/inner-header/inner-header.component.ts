import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_ENUMS } from 'src/app/models';

const { YOUR_PAGE, LOGIN, NEW_FEEDS, CREATE_POST, DATA_VISUAL } = ROUTING_ENUMS;

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.scss'],
})
export class InnerHeaderComponent implements OnInit {
  email = 'Minh.NguyenQuy@vn.bosch.com';
  formatedE = this.email.slice(0, this.email.indexOf('@'));
  location = window.location.pathname;
  userName = localStorage.getItem('userName')
    ? localStorage.getItem('userName')
    : 'Minh';

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  logout() {
    if (localStorage.getItem('userName') && localStorage.getItem('userId')) {
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
    }
    this._router.navigate([LOGIN]);
  }

  yourPage() {
    console.log('location path', this.location);
    if (this.location.includes(YOUR_PAGE)) {
      return;
    }
    this._router.navigate([YOUR_PAGE]);
  }

  createPost() {
    if (this.location.includes(CREATE_POST)) {
      return;
    }
    this._router.navigate([CREATE_POST]);
  }

  newsFeedClick() {
    if (this.location.includes(NEW_FEEDS)) {
      return;
    }
    this._router.navigate([NEW_FEEDS]);
  }

  getFormatedEmail() {
    return this.formatedE.length > 25
      ? this.formatedE.slice(0, 25) + '...'
      : this.formatedE;
  }

  onClickOverallStatus() {
    this._router.navigate([DATA_VISUAL]);
  }
}
