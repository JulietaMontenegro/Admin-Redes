import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-editar-alumno',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './editar-alumno.component.html',
  styleUrl: './editar-alumno.component.css'
})
export class EditarAlumnoComponent implements OnInit{
  router: Router = inject(Router);
  alumno: Alumno | undefined;

  constructor(private route: ActivatedRoute, private alumnosService : AlumnosService){
  }

  ngOnInit(): void {
    const idAlumno = parseInt(this.route.snapshot.params['id'], 10);
    this.alumnosService.obtenerAlumnoPorId(idAlumno).subscribe(
      response => {
        this.alumno = response.alumnos;
        
      },
      error => {
        console.error('Error al obtener alumno:', error);
      }
    );
  }

  applyForm = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
  });

  submitApplication() {
    const nombre: string = this.applyForm.value.nombre ?? '';
    const mail: string = this.applyForm.value.mail ?? '';
  
    const nuevo: { alumno: Alumno } = {
      alumno: {
        id: this.alumno?.id ?? 0,
        nombre: nombre,
        materias: this.alumno?.materias ?? [],
        notas: this.alumno?.notas ?? [],
        mail: mail,
      }
    };
  
    console.log(nuevo);
    this.alumnosService.actualizarAlumno(nuevo).subscribe(
      response => {
        this.router.navigateByUrl('')
      },
      error => {
        console.error('Error al agregar alumno:', error);
      }
    );
  }

}
