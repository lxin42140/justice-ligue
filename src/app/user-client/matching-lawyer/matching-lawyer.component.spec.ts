import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingLawyerComponent } from './matching-lawyer.component';

describe('MatchingLawyerComponent', () => {
  let component: MatchingLawyerComponent;
  let fixture: ComponentFixture<MatchingLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
