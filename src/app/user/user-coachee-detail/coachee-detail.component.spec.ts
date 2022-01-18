import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeDetailComponent } from './coachee-detail.component';

describe('CoacheeDetailComponent', () => {
  let component: CoacheeDetailComponent;
  let fixture: ComponentFixture<CoacheeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
