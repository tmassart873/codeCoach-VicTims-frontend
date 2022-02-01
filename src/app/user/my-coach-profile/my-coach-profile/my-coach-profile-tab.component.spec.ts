import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoachProfileTabComponent } from './my-coach-profile-tab.component';

describe('MyCoachProfileTabComponent', () => {
  let component: MyCoachProfileTabComponent;
  let fixture: ComponentFixture<MyCoachProfileTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCoachProfileTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoachProfileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
