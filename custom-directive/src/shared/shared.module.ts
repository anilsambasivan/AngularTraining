import { NgModule } from '@angular/core';

import { HiddenDirective } from './directives/hidden/hidden.directive';

@NgModule({
  declarations: [
    HiddenDirective
  ],
  exports: [
    HiddenDirective
  ],
})
export class SharedModule { }