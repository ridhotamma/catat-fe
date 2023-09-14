import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceRequestComponent } from './attendance-request.component';

describe('AttendanceRequestComponent', () => {
  let component: AttendanceRequestComponent;
  let fixture: ComponentFixture<AttendanceRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceRequestComponent]
    });
    fixture = TestBed.createComponent(AttendanceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
