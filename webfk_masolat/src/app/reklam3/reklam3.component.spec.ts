import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reklam3Component } from './reklam3.component';

describe('Reklam3Component', () => {
  let component: Reklam3Component;
  let fixture: ComponentFixture<Reklam3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reklam3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reklam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
