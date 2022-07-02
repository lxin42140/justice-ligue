import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Case } from 'src/app/models/Case';
import { CaseDetailComponent } from 'src/app/shared/case-detail/case-detail.component';
import { DummyCase1, DummyCase2, DummyCase3 } from 'src/app/data/data';

@Component({
  selector: 'app-view-all-cases',
  templateUrl: './view-all-cases.component.html',
  styleUrls: ['./view-all-cases.component.scss']
})
export class ViewAllCasesComponent implements OnInit {

  allCases: Case[] = [DummyCase1, DummyCase2, DummyCase3];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  async openModal() {
    const dialogueToShow = this.dialog.open(CaseDetailComponent, {
      width: '80%',
      height: '80%',
      data: { caseToShow: DummyCase1 }
    });
  }

}
