import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingTopicsComponent } from './coaching-topics.component';

describe('CoachingTopicsComponent', () => {
  let component: CoachingTopicsComponent;
  let fixture: ComponentFixture<CoachingTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
