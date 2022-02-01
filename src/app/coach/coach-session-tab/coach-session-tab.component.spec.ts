import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachSessionTabComponent } from './coach-session-tab.component';

describe('CoachSessionTabComponent', () => {
  let component: CoachSessionTabComponent;
  let fixture: ComponentFixture<CoachSessionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachSessionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachSessionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
