import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinmuxToolComponent } from './pinmux-tool.component';

describe('PinmuxToolComponent', () => {
  let component: PinmuxToolComponent;
  let fixture: ComponentFixture<PinmuxToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinmuxToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinmuxToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
