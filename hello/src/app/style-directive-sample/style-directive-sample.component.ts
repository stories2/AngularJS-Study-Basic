import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-directive-sample',
  templateUrl: './style-directive-sample.component.html',
  styleUrls: ['./style-directive-sample.component.css']
})
export class StyleDirectiveSampleComponent implements OnInit {
  width = 200;
  height = 200;
  bgColor = '#4caf50';
  isShow = true;
  gap = 10;

  constructor() { }

  ngOnInit() {
  }

  increaseWidth() {
    this.width += this.gap;
  }

  decreaseWidth() {
    this.width -= this.gap;
  }

  increaseHeight() {
    this.height += this.gap;
  }

  decreaseHeight() {
    this.height -= this.gap;
  }
}
