import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reklam1Component } from './reklam1.component';

describe('Reklam1Component', () => {
  let component: Reklam1Component;
  let fixture: ComponentFixture<Reklam1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reklam1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reklam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
