import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from '../servicios/alumno/api/notas.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Nota } from '../interfaces/nota';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-editar-nota',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './editar-nota.component.html',
  styleUrl: './editar-nota.component.css'
})
export class EditarNotaComponent {
  router: Router = inject(Router);
  idAlumno = parseInt(this.route.snapshot.params['id'], 10);

  constructor(private route: ActivatedRoute, private notasService : NotasService){
  }


  applyForm = new FormGroup({
    id: new FormControl(),
    materiaId: new FormControl(),
    tema: new FormControl(''),
    calificacion: new FormControl(),
  });

  submitApplication() {
    const tema: string = this.applyForm.value.tema ?? '';
    const id = this.applyForm.value.id ?? '';
    const materiaId = this.applyForm.value.materiaId ?? '';
    const calificacion = this.applyForm.value.calificacion ?? '';
  
    const nuevo: { nota: Nota } = {
      nota: {
        id: id ?? 0,
        materiaId: materiaId,
        alumnoId: this.idAlumno,
        tema: tema ?? '',
        calificacion: calificacion
      }
    };
  
    console.log(nuevo);
    this.notasService.actualizarNota(nuevo).subscribe(
      response => {
        this.router.navigateByUrl('')
      },
      error => {
        console.error('Error al agregar alumno:', error);
      }
    );
  }

}
