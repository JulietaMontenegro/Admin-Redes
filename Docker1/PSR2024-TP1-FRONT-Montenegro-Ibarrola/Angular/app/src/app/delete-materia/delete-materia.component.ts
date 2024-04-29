import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MateriasService } from '../servicios/alumno/api/materias.service';

@Component({
  selector: 'app-delete-materia',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './delete-materia.component.html',
  styleUrl: './delete-materia.component.css'
})
export class DeleteMateriaComponent {
  router: Router = inject(Router);

  constructor(private materiasService : MateriasService){}

  applyForm = new FormGroup({
    id: new FormControl(),
  });

  submitApplication() {
    const id = this.applyForm.value.id;
  
    this.materiasService.deleteMateria(id).subscribe(
      response => {
        this.router.navigateByUrl('')
      },
      error => {
        console.error('Error al eliminar materia:', error);
      }
    );
  }
}
