import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonErrorModalComponent } from './common-error-modal/common-error-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const angularMaterialModules = [MatDialogModule, MatButtonModule];

@NgModule({
  declarations: [CommonErrorModalComponent],
  imports: [CommonModule, ...angularMaterialModules],
  entryComponents: [CommonErrorModalComponent]
})
export class CommonErrorModalModule {}
