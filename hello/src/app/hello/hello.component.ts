import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name: string;
  testName: string;

  constructor() { }

  ngOnInit() {
    this.testName = "Kim";
  }

  setName(name: string) {
    this.name = name;
  }

}
