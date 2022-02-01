import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoachInformationComponent } from './my-coach-information.component';

describe('CoachInformationComponent', () => {
  let component: MyCoachInformationComponent;
  let fixture: ComponentFixture<MyCoachInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoachInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoachInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
