import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Materia } from '../interfaces/materia';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MateriasService } from '../servicios/alumno/api/materias.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-materia',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-materia.component.html',
  styleUrl: './edit-materia.component.css'
})
export class EditMateriaComponent implements OnInit{
  router: Router = inject(Router);
  materia : Materia | undefined;

  constructor(private route: ActivatedRoute, private materiasService : MateriasService){
  }
  ngOnInit(): void {
    const idMateria = parseInt(this.route.snapshot.params['id'], 10);
    this.materiasService.obtenerMateriaPorId(idMateria).subscribe(
      response => {
        this.materia = this.eliminarLlaveExterna(response);
      },
      error => {
        console.error('Error al obtener materia:', error);
      }
    );
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
        id: this.materia?.id ?? 0,
        nombre: nombre,
        nombreProfesor : nombreProfesor,
        temas: this.materia?.temas ?? [],
        foto: foto,
        horarios: horarios,
      }
    };
  
    console.log(nuevo);
    this.materiasService.actualizarMateria(nuevo).subscribe(
      response => {
        this.router.navigateByUrl('')
      },
      error => {
        console.error('Error al actualizar materia:', error);
      }
    );
  }
  eliminarLlaveExterna(objeto: any): any {
    const llaveExterna = Object.keys(objeto)[0];
    return objeto[llaveExterna]; 
  }
}
