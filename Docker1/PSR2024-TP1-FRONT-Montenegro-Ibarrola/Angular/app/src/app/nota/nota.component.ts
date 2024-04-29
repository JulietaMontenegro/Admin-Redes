import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { Nota } from '../interfaces/nota';
import { Alumno } from '../interfaces/alumno';
import { CommonModule } from '@angular/common';
import { Materia } from '../interfaces/materia';
import { MateriasService } from '../servicios/alumno/api/materias.service';
import { NotasService } from '../servicios/alumno/api/notas.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-nota',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent implements OnInit{
  notas : number[]= [];
  alumno: Alumno | undefined;
  notasArregladas : Map<Materia, Nota[]> = new Map<Materia, Nota[]>();
  constructor(private route: ActivatedRoute, private notasService: NotasService, private alumnosService: AlumnosService, private materiasService : MateriasService) {}

  ngOnInit(): void {
    const idAlumno = parseInt(this.route.snapshot.params['id'], 10);
    this.alumnosService.obtenerAlumnoPorId(idAlumno).subscribe(
      alumno => {
        this.alumno = this.eliminarLlaveExterna(alumno);
        if(this.alumno){
          this.notas = this.alumno.notas;
          this.ordenarNotasPorMateria();
        }
        
      },
      error => {
        console.error('Error al obtener alumno:', error);
      }
    );
  }

  ordenarNotasPorMateria() : void {
    let materiaNota : Materia | undefined;
    if (this.alumno && this.notas && this.notas.length > 0) {
      this.notas.forEach(notaId => {
        this.notasService.obtenerNotaPorId(notaId).subscribe(
          nota => {      
            let laNota= this.eliminarLlaveExterna(nota)
            this.materiasService.obtenerMateriaPorId(laNota.materiaId).subscribe(
              materia => {
                materiaNota= this.eliminarLlaveExterna(materia);
                if(materiaNota){
                  if(this.notasArregladas.has(materiaNota)){
                    this.notasArregladas.get(materiaNota)?.push(this.eliminarLlaveExterna(this.notasService.obtenerNotaPorId(this.eliminarLlaveExterna(nota))));
                  }else{
                    let nuevoNotas : Nota[] = [];
                    nuevoNotas.push(laNota);
                    this.notasArregladas.set(materiaNota, nuevoNotas);
                  }
                }
              },
              error =>{
                console.log("Error al obtener nota", error);
              }
            );
          },
          error => {
            console.error('Error al obtener nota:', error);
          }
        );
        });
        console.log(this.notasArregladas)
    }
    };
  
  eliminarLlaveExterna(objeto: any): any {
    const llaveExterna = Object.keys(objeto)[0];
    return objeto[llaveExterna]; 
  }


}
