import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vogelhok2Component } from './vogelhok2.component';

describe('Vogelhok2Component', () => {
  let component: Vogelhok2Component;
  let fixture: ComponentFixture<Vogelhok2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vogelhok2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vogelhok2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
