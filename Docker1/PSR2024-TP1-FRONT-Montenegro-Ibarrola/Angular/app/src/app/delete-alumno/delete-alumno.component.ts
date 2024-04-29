import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-alumno',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './delete-alumno.component.html',
  styleUrl: './delete-alumno.component.css'
})
export class DeleteAlumnoComponent {
  router: Router = inject(Router);

  constructor(private alumnosService : AlumnosService){}

  applyForm = new FormGroup({
    id: new FormControl(),
  });

  submitApplication() {
    const id = this.applyForm.value.id;
  
    this.alumnosService.deleteAlumno(id).subscribe(
      response => {
        console.log('Alumno eliminado correctamente:', response);
        this.router.navigateByUrl('')
      },
      error => {
        console.error('Error al eliminar alumno:', error);
      }
    );
  }
}
