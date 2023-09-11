import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTimeComponent } from './clock-time.component';

describe('ClockTimeComponent', () => {
  let component: ClockTimeComponent;
  let fixture: ComponentFixture<ClockTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockTimeComponent]
    });
    fixture = TestBed.createComponent(ClockTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
