import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumstrokeComponent } from './sumstroke.component';

describe('SumstrokeComponent', () => {
  let component: SumstrokeComponent;
  let fixture: ComponentFixture<SumstrokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumstrokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumstrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
