import { DeleteDialogComponent } from '@products/delete-dialog';
import { ItemType } from '@products/core-data';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteDialogService {

  constructor(private matDialog: MatDialog) {}

  deleteDialog(item: ItemType) {
    const ref = this.matDialog.open(DeleteDialogComponent, {
      data: {
        item: { ...item }
      }
    });
    return ref.afterClosed();
  }

}
