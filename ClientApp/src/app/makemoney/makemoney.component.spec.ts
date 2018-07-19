import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakemoneyComponent } from './makemoney.component';

describe('MakemoneyComponent', () => {
  let component: MakemoneyComponent;
  let fixture: ComponentFixture<MakemoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakemoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
