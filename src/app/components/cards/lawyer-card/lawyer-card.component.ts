import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LawyerDialogData, LawyerModalComponent } from '../../modal/lawyer-modal/lawyer-modal.component';

@Component({
  selector: 'app-lawyer-card',
  templateUrl: './lawyer-card.component.html',
  styleUrls: ['./lawyer-card.component.scss']
})
export class LawyerCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  async openModal(viewProfile: boolean) {
    const dialogRef = this.dialog.open(LawyerModalComponent, {
      width: '80%',
      height: '80%',
      data: <LawyerDialogData>{ viewProfile: viewProfile },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

}
