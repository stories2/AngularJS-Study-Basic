import { Component, OnInit, Input } from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() childUserList: User;

  constructor() { }

  ngOnInit() {
  }

}
