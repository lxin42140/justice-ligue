import { Case } from './../../models/Case';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface CaseDetailDialogData {
  caseToShow: Case
}
@Component({
  selector: 'app-case-detail-modal',
  templateUrl: './case-detail-modal.component.html',
  styleUrls: ['./case-detail-modal.component.scss']
})
export class CaseDetailModalComponent implements OnInit {

  caseToShow: Case | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CaseDetailDialogData
  ) { }

  ngOnInit(): void {
    this.caseToShow = this.data.caseToShow;
  }

}
