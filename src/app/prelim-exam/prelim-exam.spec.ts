import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelimExam } from './prelim-exam';

describe('PrelimExam', () => {
  let component: PrelimExam;
  let fixture: ComponentFixture<PrelimExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrelimExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrelimExam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
