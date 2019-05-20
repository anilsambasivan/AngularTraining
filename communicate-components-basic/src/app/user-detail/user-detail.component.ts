import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() public userDetail: User;
  @Output() public onSaveUserDetail = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  public onSubmitClick(): void {
    this.onSaveUserDetail.emit(this.userDetail);
  }
}
