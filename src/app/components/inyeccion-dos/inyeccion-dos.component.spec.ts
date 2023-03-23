import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyeccionDosComponent } from './inyeccion-dos.component';

describe('InyeccionDosComponent', () => {
  let component: InyeccionDosComponent;
  let fixture: ComponentFixture<InyeccionDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InyeccionDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InyeccionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
