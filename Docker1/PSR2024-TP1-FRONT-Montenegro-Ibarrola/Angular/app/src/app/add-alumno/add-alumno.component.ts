import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { Alumno } from '../interfaces/alumno';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
@Component({
  selector: 'app-add-alumno',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-alumno.component.html',
  styleUrl: './add-alumno.component.css'
})
export class AddAlumnoComponent {
  router: Router = inject(Router);

  constructor(private alumnosService: AlumnosService) {
  }

  applyForm = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(''),
    mail: new FormControl(''),
  });

  submitApplication() {
    const id = this.applyForm.value.id;
    const nombre: string = this.applyForm.value.nombre ?? '';
    const mail: string = this.applyForm.value.mail ?? '';
  
    const nuevo: { alumno: Alumno } = {
      alumno: {
        id: id,
        nombre: nombre,
        materias: [],
        notas: [],
        mail: mail,
      }
    };
  
    console.log(nuevo);
    this.alumnosService.agregarAlumno(nuevo).subscribe(
      response => {
        console.log('Alumno agregado correctamente:', response);
        this.router.navigateByUrl('')
      },
      error => {
        console.error('Error al agregar alumno:', error);
      }
    );
  }
  
}

