import { Component, OnInit, Input } from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  childUserList: User[];
  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set _childUserList(childUserList: User[]) {
    this.childUserList = childUserList;

    this.cntAdmin = childUserList.filter((({role}) => role === 'Admin')).length;
    this.cntDeveloper = childUserList.filter(({role}) => role === 'Developer').length;
    this.cntDesigner = childUserList.filter(({role}) => role === 'Designer').length;

  }

  get _childUserList() {
    return this.childUserList;
  }
}
