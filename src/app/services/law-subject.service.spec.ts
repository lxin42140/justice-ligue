import { TestBed } from '@angular/core/testing';

import { LawSubjectService } from './law-subject.service';

describe('LawSubjectService', () => {
  let service: LawSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
