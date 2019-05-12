import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reklam4Component } from './reklam4.component';

describe('Reklam4Component', () => {
  let component: Reklam4Component;
  let fixture: ComponentFixture<Reklam4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reklam4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reklam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
