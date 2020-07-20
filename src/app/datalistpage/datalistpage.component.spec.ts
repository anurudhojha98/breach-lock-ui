import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalistpageComponent } from './datalistpage.component';

describe('DatalistpageComponent', () => {
  let component: DatalistpageComponent;
  let fixture: ComponentFixture<DatalistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatalistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
