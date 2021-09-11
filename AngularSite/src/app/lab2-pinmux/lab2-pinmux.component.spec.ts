import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab2PinmuxComponent } from './lab2-pinmux.component';

describe('Lab2PinmuxComponent', () => {
  let component: Lab2PinmuxComponent;
  let fixture: ComponentFixture<Lab2PinmuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab2PinmuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab2PinmuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
