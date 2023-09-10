import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeClockComponent } from './realtime-clock.component';

describe('RealtimeClockComponent', () => {
  let component: RealtimeClockComponent;
  let fixture: ComponentFixture<RealtimeClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealtimeClockComponent]
    });
    fixture = TestBed.createComponent(RealtimeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
