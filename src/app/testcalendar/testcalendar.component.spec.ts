import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcalendarComponent } from './testcalendar.component';

describe('TestcalendarComponent', () => {
  let component: TestcalendarComponent;
  let fixture: ComponentFixture<TestcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
