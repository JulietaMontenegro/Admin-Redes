import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMateriaAlumnoComponent } from './delete-materia-alumno.component';

describe('DeleteMateriaAlumnoComponent', () => {
  let component: DeleteMateriaAlumnoComponent;
  let fixture: ComponentFixture<DeleteMateriaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMateriaAlumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMateriaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
