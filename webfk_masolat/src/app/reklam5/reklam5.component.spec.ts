import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reklam5Component } from './reklam5.component';

describe('Reklam5Component', () => {
  let component: Reklam5Component;
  let fixture: ComponentFixture<Reklam5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reklam5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reklam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
