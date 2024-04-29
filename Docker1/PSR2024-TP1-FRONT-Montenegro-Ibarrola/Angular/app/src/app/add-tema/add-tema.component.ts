import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MateriasService } from '../servicios/alumno/api/materias.service';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Materia } from '../interfaces/materia';

@Component({
  selector: 'app-add-tema',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './add-tema.component.html',
  styleUrl: './add-tema.component.css'
})
export class AddTemaComponent implements OnInit{
  router: Router = inject(Router);
  materia : Materia |undefined;

  constructor(private route : ActivatedRoute, private materiasService : MateriasService){}

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
    tema: new FormControl(''),
  });

  submitApplication() {
    const tema = this.applyForm.value.tema ?? '';
  
    if (this.materia) {
      let nuevosTemas: string[] = [];
      if (this.materia.temas) {
        nuevosTemas = [...this.materia.temas, tema];
        console.log(nuevosTemas)
      }
  
      const materiaConId: { materia :Materia} = {
        materia :{
        id: this.materia.id ?? 0,
        nombre: this.materia.nombre ?? '',
        nombreProfesor: this.materia.nombreProfesor ?? '',
        temas: nuevosTemas, 
        foto: this.materia.foto ?? '',
        horarios: this.materia.horarios ?? ''
      }
      };
  
      this.materiasService.actualizarMateria(materiaConId).subscribe(
        response => {
          this.router.navigateByUrl('');
        },
        error => {
          console.error('Error al actualizar materia:', error);
        }
      );
    }
  }
  eliminarLlaveExterna(objeto: any): any {
    const llaveExterna = Object.keys(objeto)[0];
    return objeto[llaveExterna]; 
  }
}
