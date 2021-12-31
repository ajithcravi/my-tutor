import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPageBaseComponent } from './public-page-base.component';

describe('PublicPageBaseComponent', () => {
  let component: PublicPageBaseComponent;
  let fixture: ComponentFixture<PublicPageBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicPageBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPageBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
