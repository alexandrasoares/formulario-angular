import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonGenericoComponent } from './radio-button-generico.component';

describe('RadioButtonGenericoComponent', () => {
  let component: RadioButtonGenericoComponent;
  let fixture: ComponentFixture<RadioButtonGenericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonGenericoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
