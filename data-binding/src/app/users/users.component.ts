import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public user: User;

  constructor() {
    this.user = new User({
      name: 'chethan',
      email: 'chethan@gmail.com',
      phone: '0000000000',
      company: 'chethan tech',
    });
  }

  ngOnInit() {
  }

  public onSubmitClick(): void {
    alert(JSON.stringify(this.user));
  }

}
