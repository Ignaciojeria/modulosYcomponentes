import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRuta2Component } from './app-ruta2.component';

describe('AppRuta2Component', () => {
  let component: AppRuta2Component;
  let fixture: ComponentFixture<AppRuta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRuta2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRuta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
