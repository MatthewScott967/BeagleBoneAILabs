import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedQueryResultComponent } from './selected-query-result.component';

describe('SelectedQueryResultComponent', () => {
  let component: SelectedQueryResultComponent;
  let fixture: ComponentFixture<SelectedQueryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedQueryResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedQueryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
