import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMateriaAlumnoComponent } from './add-materia-alumno.component';

describe('AddMateriaAlumnoComponent', () => {
  let component: AddMateriaAlumnoComponent;
  let fixture: ComponentFixture<AddMateriaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMateriaAlumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMateriaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
