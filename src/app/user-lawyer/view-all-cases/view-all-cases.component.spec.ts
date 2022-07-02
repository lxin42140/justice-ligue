import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCasesComponent } from './view-all-cases.component';

describe('ViewAllCasesComponent', () => {
  let component: ViewAllCasesComponent;
  let fixture: ComponentFixture<ViewAllCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
