import { Component, OnInit } from '@angular/core';
import { flipX } from '../../animations';
@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
  animations: [flipX]
})
export class FlashComponent implements OnInit {
  _type;
  _message;
  _ref;
  _staticAlertClosed = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => (this._staticAlertClosed = true), 3000);
  }
}