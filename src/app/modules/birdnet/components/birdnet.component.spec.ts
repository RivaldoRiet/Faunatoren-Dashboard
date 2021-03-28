import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdnetComponent } from './birdnet.component';

describe('BirdnetComponent', () => {
  let component: BirdnetComponent;
  let fixture: ComponentFixture<BirdnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
