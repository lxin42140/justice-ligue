import { Case } from './../../models/Case';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {

  @Input() caseToShow: Case | undefined


  constructor() { }

  ngOnInit(): void {
  }

}
