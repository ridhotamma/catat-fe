import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceButtonComponent } from './attendance-button.component';

describe('AttendanceButtonComponent', () => {
  let component: AttendanceButtonComponent;
  let fixture: ComponentFixture<AttendanceButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceButtonComponent]
    });
    fixture = TestBed.createComponent(AttendanceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
