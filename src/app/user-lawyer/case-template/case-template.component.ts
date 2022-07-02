import { CaseInformationTemplate } from './../../models/CaseInformationTemplate';
import { caseInformationTemplates } from './../../data/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-template',
  templateUrl: './case-template.component.html',
  styleUrls: ['./case-template.component.scss']
})
export class CaseTemplateComponent implements OnInit {

  templates: CaseInformationTemplate[];
  dtOptions: any = {};

  constructor(
  ) { 
    this.templates = caseInformationTemplates;
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      responsive: true,
      buttons: [],
      paging: false
    };
  }

}
