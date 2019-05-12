import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reklam7Component } from './reklam7.component';

describe('Reklam7Component', () => {
  let component: Reklam7Component;
  let fixture: ComponentFixture<Reklam7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reklam7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reklam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
