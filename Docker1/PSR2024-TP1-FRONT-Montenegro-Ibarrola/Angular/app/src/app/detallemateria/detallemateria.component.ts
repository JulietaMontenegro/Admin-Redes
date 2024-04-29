import { Component, OnInit } from '@angular/core';
import { Materia } from '../interfaces/materia';
import { MateriasService } from '../servicios/alumno/api/materias.service';
import { ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detallemateria',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './detallemateria.component.html',
  styleUrl: './detallemateria.component.css'
})
export class DetallemateriaComponent implements OnInit{
    materia : Materia | undefined;

    constructor(private route: ActivatedRoute, private materiasService: MateriasService) { }

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

    eliminarLlaveExterna(objeto: any): any {
      const llaveExterna = Object.keys(objeto)[0];
      return objeto[llaveExterna]; 
    }
}
