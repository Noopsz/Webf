import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reklam8Component } from './reklam8.component';

describe('Reklam8Component', () => {
  let component: Reklam8Component;
  let fixture: ComponentFixture<Reklam8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reklam8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reklam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
