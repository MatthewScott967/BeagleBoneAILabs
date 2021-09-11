import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab1SetupComponent } from './lab1-setup.component';

describe('Lab1SetupComponent', () => {
  let component: Lab1SetupComponent;
  let fixture: ComponentFixture<Lab1SetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab1SetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab1SetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
