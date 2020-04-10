import { MaterialModule } from './../../../material-module/src/lib/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [DeleteDialogComponent]
})
export class DeleteDialogModule {}
