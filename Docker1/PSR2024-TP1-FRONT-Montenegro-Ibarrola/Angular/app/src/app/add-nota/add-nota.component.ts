import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { inject } from '@angular/core';
import { NotasService } from '../servicios/alumno/api/notas.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Nota } from '../interfaces/nota';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-add-nota',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-nota.component.html',
  styleUrl: './add-nota.component.css'
})
export class AddNotaComponent implements OnInit{
  router: Router = inject(Router);
  alumno : Alumno | undefined;

  constructor(private alumnosService : AlumnosService, private route : ActivatedRoute, private notasService: NotasService) {
  }

  applyForm = new FormGroup({
    idMateria: new FormControl(),
    tema: new FormControl(''),
    calificacion: new FormControl(),
  });

  ngOnInit(): void {
    const idAlumno = parseInt(this.route.snapshot.params['id'], 10);
    this.alumnosService.obtenerAlumnoPorId(idAlumno).subscribe(
      response => {
        this.alumno = response.alumnos;
        console.log("el alumno", this.alumno)
      },
      error => {
        console.error('Error al obtener alumno:', error);
      }
    );
  }

  submitApplication() {
    const idMateria = this.applyForm.value.idMateria;
    const tema: string = this.applyForm.value.tema ?? '';
    const calificacion = this.applyForm.value.calificacion;
    const idAlumno = parseInt(this.route.snapshot.params['id'], 10);
  
    const nuevaNota: { nota: Nota } = {
      nota: {
        id: 1, 
        materiaId: idMateria,
        alumnoId: idAlumno,
        tema: tema,
        calificacion: calificacion,
      }
    };
  
    this.notasService.agregarNota(nuevaNota).subscribe(
      response => {
          this.notasService.getNotas().subscribe(
            allNotas => {
              allNotas.notas.forEach(nota => {
                if (nota.alumnoId === idAlumno && !this.alumno?.notas.includes(nota.id)) {
                  this.alumno?.notas.push(nota.id);
                }
              });
              if (this.alumno) {
                this.actualizarAlumnoEnServidor(this.alumno);
              }
            },
            error => {
              console.error('Error al obtener todas las notas:', error);
            }
          );
  
          this.router.navigateByUrl('');
      },
      error => {
        console.error('Error al agregar nota:', error);
      }
    );
  }
  


  eliminarLlaveExterna(objeto: any): any {
    const llaveExterna = Object.keys(objeto)[0];
    return objeto[llaveExterna]; 
  }

  actualizarAlumnoEnServidor(alumno: Alumno) {
    const alumnoConClave = { alumno: alumno };
    this.alumnosService.actualizarAlumno(alumnoConClave).subscribe(
      alumnoAct => {
        console.log('Alumno actualizado en el servidor:', alumnoAct);
      },
      error => {
        console.error('Error al actualizar alumno en el servidor:', error);
      }
    );
  }
}
  

