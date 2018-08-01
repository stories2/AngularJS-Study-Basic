import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  isLarge = true;
  isRed = false;
  myClasses = 'text-large color-red';
  isActive = false;
  userName = "KIM";

  setName(event) {
    console.log(event);
    this.userName = event.target.value;
  }

  clearName() {
    this.userName = "";
  }
}
