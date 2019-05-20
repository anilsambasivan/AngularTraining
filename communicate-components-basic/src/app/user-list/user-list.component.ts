import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Output() public onSaveUserDetailEvent = new EventEmitter<User>();

  public users: User[] = [
    {
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "company": 'Emids'
    },
    {
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "company": 'Emids Tech',
    },
  ];

  public selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

  public onSelectedUser(user: User): void {
    this.selectedUser = user;
  }

  public onUserDetailSaveClick(userData: User): void {
    this.onSaveUserDetailEvent.emit(userData);
  }
}
