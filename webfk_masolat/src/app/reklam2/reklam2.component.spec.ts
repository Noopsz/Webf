import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reklam2Component } from './reklam2.component';

describe('Reklam2Component', () => {
  let component: Reklam2Component;
  let fixture: ComponentFixture<Reklam2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reklam2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reklam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
