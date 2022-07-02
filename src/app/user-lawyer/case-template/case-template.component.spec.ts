import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTemplateComponent } from './case-template.component';

describe('CaseTemplateComponent', () => {
  let component: CaseTemplateComponent;
  let fixture: ComponentFixture<CaseTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
