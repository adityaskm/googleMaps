import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsAutoCompleteDirective } from './google-maps-auto-complete.directive';

@NgModule({
  declarations: [GoogleMapsAutoCompleteDirective],
  imports: [CommonModule],
  exports: [GoogleMapsAutoCompleteDirective]
})
export class GoogleMapsAutoCompleteModule {}
