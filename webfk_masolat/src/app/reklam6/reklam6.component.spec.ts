import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reklam6Component } from './reklam6.component';

describe('Reklam6Component', () => {
  let component: Reklam6Component;
  let fixture: ComponentFixture<Reklam6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reklam6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reklam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
