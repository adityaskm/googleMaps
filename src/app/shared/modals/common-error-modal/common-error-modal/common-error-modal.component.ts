import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-common-error-modal',
  templateUrl: './common-error-modal.component.html',
  styleUrls: ['./common-error-modal.component.scss']
})
export class CommonErrorModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CommonErrorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit() {}

  closeModal() {
    this.dialogRef.close();
  }
}
