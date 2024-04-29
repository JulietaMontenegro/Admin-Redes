import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import { Alumno } from '../interfaces/alumno';
import { Materia } from '../interfaces/materia';
import { MateriaService } from '../servicios/alumno/materia/materia.service';
import { FormsModule } from '@angular/forms';
import { MateriaComponent } from '../materia/materia.component';
import { RouterModule } from '@angular/router';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { inject } from '@angular/core';
import { MateriasService } from '../servicios/alumno/api/materias.service';
import { response } from 'express';
@Component({
  selector: 'app-detallealumno',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MateriaComponent,
    RouterModule,
  ],
  templateUrl: './detallealumno.component.html',
  styleUrl: './detallealumno.component.css'
})
export class DetallealumnoComponent implements OnInit {
  alumno: Alumno | undefined;
  materiasAlumno: Materia[] = [];

  constructor(private route: ActivatedRoute, private servicio: AlumnosService, private materiasService: MateriasService) {}

  ngOnInit(): void {
    const idAlumno = parseInt(this.route.snapshot.params['id'], 10);
    this.servicio.obtenerAlumnoPorId(idAlumno).subscribe(
      response => {
        this.alumno = response.alumnos;
        this.obtenerMateriasDelAlumno();
        
      },
      error => {
        console.error('Error al obtener alumno:', error);
      }
    );
  }


  obtenerMateriasDelAlumno(): void {
    if (this.alumno && this.alumno.materias && this.alumno.materias.length > 0) {
      this.alumno.materias.forEach(materiaId => {
        this.materiasService.obtenerMateriaPorId(materiaId).subscribe(
          materia => {
            this.materiasAlumno.push(this.eliminarLlaveExterna(materia));
          },
          error => {
            console.error('La materia no se pudo obtener porque fue borrada o no existe', error);
          }
        );
      });
    }
  }

  eliminarLlaveExterna(objeto: any): any {
    const llaveExterna = Object.keys(objeto)[0];
    return objeto[llaveExterna]; 
  }
  
}