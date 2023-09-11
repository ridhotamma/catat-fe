import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMenuComponent } from './switch-menu.component';

describe('SwitchMenuComponent', () => {
  let component: SwitchMenuComponent;
  let fixture: ComponentFixture<SwitchMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchMenuComponent]
    });
    fixture = TestBed.createComponent(SwitchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
