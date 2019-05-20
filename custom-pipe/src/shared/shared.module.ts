import { NgModule } from '@angular/core';
import { RemoveSpacePipe } from './pipes/remove-space/remove-space.pipe';

@NgModule({
  declarations: [
    RemoveSpacePipe
  ],
  exports: [
    RemoveSpacePipe
  ],
})
export class SharedModule { }