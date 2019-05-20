import { Component } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'communicate-components-basic';
  public user: User;

  public onUserDetailSaveClick(userData: User): void {
    this.user = userData;
  }
}
