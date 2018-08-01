import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
  }

  setName(name: string) {
    this.name = name;
  }

}
