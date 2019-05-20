import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [CommonModule, PostsRoutingModule],
  providers: [],
  exports: [PostsComponent],
})
export class PostsModule { }