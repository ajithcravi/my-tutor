import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfPageLogoComponent } from './half-page-logo.component';

describe('HalfPageLogoComponent', () => {
  let component: HalfPageLogoComponent;
  let fixture: ComponentFixture<HalfPageLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfPageLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfPageLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
