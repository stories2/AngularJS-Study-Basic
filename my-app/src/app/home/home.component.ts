import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <p>home works!</p>
  `,
  styles: [
    `p {
      color: red;
    }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
