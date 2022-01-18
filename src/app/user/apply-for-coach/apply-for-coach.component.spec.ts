import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForCoachComponent } from './apply-for-coach.component';

describe('ApplyForCoachComponent', () => {
  let component: ApplyForCoachComponent;
  let fixture: ComponentFixture<ApplyForCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
