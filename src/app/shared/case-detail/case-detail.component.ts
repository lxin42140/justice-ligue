import { Case } from './../../models/Case';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface CaseDetailDialogData {
  caseToShow: Case
}

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {

  @Input() caseToShow: Case | undefined

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CaseDetailDialogData
  ) { }

  ngOnInit(): void {
    if (this.caseToShow === undefined && this.data.caseToShow) {
      this.caseToShow = this.data.caseToShow;
    }
  }

}
