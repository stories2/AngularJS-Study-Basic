import { Component } from '@angular/core';
import {User} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction';
  userList: User[];

  constructor() {
    this.userList = [
      {id: 1, name: "Lee", role: "Admin"},
      {id: 2, name: "Baek", role: "Developer"},
      {id: 3, name: "Park", role: "Designer"},
    ];
  }

  addUser(name: string, role: string) {
    if(name && role) {
      this.userList = [...this.userList,
        {id: this.getNextID(), name: name, role: role}
      ]
    }
  }

  getNextID(): number {
    return this.userList.length ? Math.max(...this.userList.map(({ id }) => id)) + 1 : 1;
  }

  removeUser(user: User) {
    this.userList = this.userList.filter(({id}) => id !== user.id);
  }
}
