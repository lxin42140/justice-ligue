import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawSubjectService } from '../../services/law-subject.service';

import { LawArea } from 'src/app/models/LawArea';
import { LegalIssue } from 'src/app/models/LegalIssue';

@Component({
  selector: 'app-matching-lawyer',
  templateUrl: './matching-lawyer.component.html',
  styleUrls: ['./matching-lawyer.component.scss']
})
export class MatchingLawyerComponent implements OnInit {

  selectedOption: number = -1;
  currentPage: number = 1;
  totalPages: number = 3;

  selectedLawArea: LawArea | undefined;
  selectedLegalIssue: LegalIssue | undefined;
  selectedLegalServiceCategory: string | undefined; //TODO:

  constructor(
    private router: Router,
    public lawSubjectService: LawSubjectService
  ) { }

  ngOnInit(): void {
  }

  setSelectedLawSubjectMatter(lawArea: LawArea) {
    this.selectedLawArea = lawArea
  }

  setSelectedLawSubjectMatterExample(legalIssue: LegalIssue) {
    this.selectedLegalIssue = legalIssue
  }

  setSelectedLegalServiceCategory(category: string) {
    this.selectedLegalServiceCategory = category;
  }

  selectOption(option: number) {
    this.selectedOption = option;
  }

  next() {
    if ((this.currentPage === 1 && this.selectedLawArea)) {
      if (this.selectedLegalIssue && !this.selectedLawArea.associatedLegalIssues.some(x => x.issueName === this.selectedLegalIssue?.issueName)) {
        this.selectedLegalIssue = undefined;
      }
      this.currentPage++;
    } else if (this.currentPage === 2 && this.selectedLegalIssue) {
      this.currentPage++;
    }
  }

  previous() {
    this.currentPage--;
  }

  submit() {
    //TODO: create the case here, store in service
    if (this.selectedLegalServiceCategory) {
      this.router.navigate(['/client/all-lawyers', this.selectedLawArea?.areaName, this.selectedLegalIssue?.issueName, this.selectedLegalServiceCategory]);
    }
  }
}
