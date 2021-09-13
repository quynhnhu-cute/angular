import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerex2Component } from './footerex2.component';

describe('Footerex2Component', () => {
  let component: Footerex2Component;
  let fixture: ComponentFixture<Footerex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footerex2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Footerex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
