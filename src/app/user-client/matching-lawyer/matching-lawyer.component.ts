import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawSubjectService } from '../../services/law-subject.service';
import { LawSubjectMatter } from '../../models/lawSubjectMatter';
import { LawSubjectMatterExample } from 'src/app/models/lawSubjectMatterExample';

@Component({
  selector: 'app-matching-lawyer',
  templateUrl: './matching-lawyer.component.html',
  styleUrls: ['./matching-lawyer.component.scss']
})
export class MatchingLawyerComponent implements OnInit {

  selectedOption: number = -1;
  currentPage: number = 1;
  totalPages: number = 3;

  selectedLawSubjectMatter: LawSubjectMatter | undefined;
  selectedLawSubjectMatterExample: LawSubjectMatterExample | undefined;

  constructor(
    private router: Router,
    public lawSubjectService: LawSubjectService
  ) { }

  ngOnInit(): void {
  }

  setSelectedLawSubjectMatter(subjectMatter: LawSubjectMatter) {
    this.selectedLawSubjectMatter = subjectMatter
  }

  setSelectedLawSubjectMatterExample(subjectMatterExample: LawSubjectMatterExample) {
    this.selectedLawSubjectMatterExample = subjectMatterExample
  }

  selectOption(option: number) {
    this.selectedOption = option;
  }

  next() {
    if ((this.currentPage === 1 && this.selectedLawSubjectMatter)) {
      if (this.selectedLawSubjectMatterExample && !this.selectedLawSubjectMatter.lawSubjectMatterExamples.some(x => x.exampleName === this.selectedLawSubjectMatterExample?.exampleName)) {
        this.selectedLawSubjectMatterExample = undefined;
      }
      this.currentPage++;
    } else if (this.currentPage === 2 && this.selectedLawSubjectMatterExample) {
      this.currentPage++;
    }
  }

  previous() {
    this.currentPage--;
  }

  navigate() {
    switch (this.selectedOption) {
      case (0):
        this.router.navigate(['client/matching'])
        break;
      case (1):
        this.router.navigate(['client/view-consultations']);
        break;
      default:
        break;
    }
  }

}
