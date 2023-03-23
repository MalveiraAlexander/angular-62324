import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyeccionComponent } from './inyeccion.component';

describe('InyeccionComponent', () => {
  let component: InyeccionComponent;
  let fixture: ComponentFixture<InyeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InyeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
