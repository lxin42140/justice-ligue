import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerModalComponent } from './lawyer-modal.component';

describe('LawyerModalComponent', () => {
  let component: LawyerModalComponent;
  let fixture: ComponentFixture<LawyerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
