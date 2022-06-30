import { LawSubjectMatterExample } from "./lawSubjectMatterExample";

export class LawSubjectMatter {
  subjectName: string;
  subjectDescription: string;
  lawSubjectMatterExamples: LawSubjectMatterExample[];

  constructor(
    subjectName: string,
    subjectDescription: string,
    lawSubjectMatterExamples: LawSubjectMatterExample[]
  ) {
    this.subjectName = subjectName;
    this.subjectDescription = subjectDescription;
    this.lawSubjectMatterExamples = lawSubjectMatterExamples;
  }
}