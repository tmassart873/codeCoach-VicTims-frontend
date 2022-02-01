import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoachingTopicsComponent } from './my-coaching-topics.component';

describe('CoachingTopicsComponent', () => {
  let component: MyCoachingTopicsComponent;
  let fixture: ComponentFixture<MyCoachingTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoachingTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoachingTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
