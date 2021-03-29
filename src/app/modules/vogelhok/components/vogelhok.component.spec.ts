import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VogelhokComponent } from './vogelhok.component';

describe('VogelhokComponent', () => {
  let component: VogelhokComponent;
  let fixture: ComponentFixture<VogelhokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VogelhokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VogelhokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
