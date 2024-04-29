import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { ActivatedRoute } from '@angular/router';
import { MateriasService } from '../servicios/alumno/api/materias.service';

@Component({
  selector: 'app-add-materia-alumno',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './add-materia-alumno.component.html',
  styleUrl: './add-materia-alumno.component.css'
})
export class AddMateriaAlumnoComponent {
  router: Router = inject(Router);
  alumno : Alumno | undefined;

  constructor(private alumnosService : AlumnosService, private route : ActivatedRoute, private materiasService: MateriasService) {
  }

  applyForm = new FormGroup({
    idMateria: new FormControl(),
  });

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

  submitApplication() {
    const idMateria = this.applyForm.value.idMateria;
    const idAlumno = parseInt(this.route.snapshot.params['id'], 10);
    this.alumno?.materias.push(idMateria);

    const nuevoAlumno: { alumno : Alumno } = {
      alumno: {
        id: idAlumno, 
        nombre: this.alumno?.nombre ?? '',
        materias: this.alumno?.materias ?? [],
        notas: this.alumno?.notas ?? [],
        mail: this.alumno?.mail ?? '',
      }
    };

    this.actualizarAlumnoEnServidor(nuevoAlumno);
    this.router.navigateByUrl('');
  }
  


  eliminarLlaveExterna(objeto: any): any {
    const llaveExterna = Object.keys(objeto)[0];
    return objeto[llaveExterna]; 
  }

  actualizarAlumnoEnServidor(nuevoAlumno: { alumno: Alumno }) {
    this.alumnosService.actualizarAlumno(nuevoAlumno).subscribe(
      alumnoAct => {
        console.log('Alumno actualizado en el servidor:', alumnoAct);
      },
      error => {
        console.error('Error al actualizar alumno en el servidor:', error);
      }
    );
  }
}
