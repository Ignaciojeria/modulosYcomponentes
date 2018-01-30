import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRuta1Component } from './app-ruta1.component';

describe('AppRuta1Component', () => {
  let component: AppRuta1Component;
  let fixture: ComponentFixture<AppRuta1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRuta1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRuta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
