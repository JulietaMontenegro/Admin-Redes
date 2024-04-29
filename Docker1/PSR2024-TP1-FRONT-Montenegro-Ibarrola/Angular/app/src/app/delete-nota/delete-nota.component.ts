import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { NotasService } from '../servicios/alumno/api/notas.service';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-delete-nota',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './delete-nota.component.html',
  styleUrl: './delete-nota.component.css'
})
export class DeleteNotaComponent implements OnInit{
  router: Router = inject(Router);
  alumno: Alumno | undefined;

  constructor(private route: ActivatedRoute, private notasService : NotasService, private alumnosService : AlumnosService){}

  applyForm = new FormGroup({
    id: new FormControl(),
  });

  ngOnInit(): void {
    const idAlumno = parseInt(this.route.snapshot.params['id'], 10);
    this.alumnosService.obtenerAlumnoPorId(idAlumno).subscribe(
      response => {
        this.alumno = response.alumnos;
        console.log("llego esto", response)
        
      },
      error => {
        console.error('Error al obtener alumno:', error);
      }
    );
  }

  submitApplication() {
    const id = this.applyForm.value.id;
  
    this.notasService.deleteNota(id).subscribe(
      response => {
        console.log('Nota eliminada correctamente:', response);
        this.alumno!.notas = this.alumno!.notas.filter(notaId => notaId !== id);
        if (this.alumno) {
          this.alumnosService.actualizarAlumno({ alumno: this.alumno }).subscribe(
            () => {
              console.log('Alumno actualizado');
              this.router.navigateByUrl('');
            },
            error => {
              console.error('Error al actualizar el alumno:', error);
            }
          );
        }
        this.router.navigateByUrl('')
      },
      error => {
        console.error('Error al eliminar nota:', error);
      }
    );
  }
}


