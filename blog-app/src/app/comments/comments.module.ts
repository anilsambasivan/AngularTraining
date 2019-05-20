import { NgModule } from '@angular/core';

import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [CommonModule, CommentsRoutingModule],
  providers: [],
  exports: [CommentsComponent],
})
export class CommentsModule { }
