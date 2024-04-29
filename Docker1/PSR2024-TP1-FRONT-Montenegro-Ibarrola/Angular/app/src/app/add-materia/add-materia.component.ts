import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MateriasService } from '../servicios/alumno/api/materias.service';
import { Materia } from '../interfaces/materia';

@Component({
  selector: 'app-add-materia',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-materia.component.html',
  styleUrl: './add-materia.component.css'
})
export class AddMateriaComponent {
  router: Router = inject(Router);

  constructor(private materiasService: MateriasService) {
  }

  applyForm = new FormGroup({
    nombre: new FormControl(''),
    nombreProfesor: new FormControl(''),
    foto: new FormControl(''),
    horarios : new FormControl('')
  });

  submitApplication() {
    const nombre: string = this.applyForm.value.nombre ?? '';
    const nombreProfesor: string = this.applyForm.value.nombreProfesor ?? '';
    const foto: string = this.applyForm.value.foto ?? '';
    const horarios: string = this.applyForm.value.horarios ?? '';
  
    const nuevo: { materia: Materia } = {
      materia: {
        id: 0,
        nombre: nombre,
        nombreProfesor : nombreProfesor,
        temas: [],
        foto: foto,
        horarios: horarios,
      }
    };
  
    console.log(nuevo);
    this.materiasService.postMateria(nuevo).subscribe(
      response => {
        this.router.navigateByUrl('')
      },
      error => {
        console.error('Error al agregar materia:', error);
      }
    );
  }
  
}



