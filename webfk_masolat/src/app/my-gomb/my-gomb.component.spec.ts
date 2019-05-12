import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGombComponent } from './my-gomb.component';

describe('MyGombComponent', () => {
  let component: MyGombComponent;
  let fixture: ComponentFixture<MyGombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
