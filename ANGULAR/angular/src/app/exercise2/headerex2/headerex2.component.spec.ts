import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerex2Component } from './headerex2.component';

describe('Headerex2Component', () => {
  let component: Headerex2Component;
  let fixture: ComponentFixture<Headerex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Headerex2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Headerex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
