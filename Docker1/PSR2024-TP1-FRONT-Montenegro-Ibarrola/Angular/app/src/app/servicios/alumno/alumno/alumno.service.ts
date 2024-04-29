import { Injectable, inject } from '@angular/core';
import { Alumno } from '../../../interfaces/alumno';
import { Nota } from '../../../interfaces/nota';
import { MateriaService } from '../materia/materia.service';
import { NotaService } from '../nota/nota.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  constructor(private servicioNota: NotaService, private servicioMateria: MateriaService) {}

  /*protected listaAlumnos : Alumno[] = [
    {
    id: 46325129,
    nombre: "Taylor Swift",
    materias : [1, 2],
    notas: [1, 2,17],
    mail : "taylor@gmail.com",

    },
    {
      id: 46985302,
      nombre: "Harry Styles",
      materias : [3, 2],
      notas: [3, 4],
      mail : "hs@gmail.com",
   
      },
      {
        id: 46985397,
        nombre: "Olivia Rodrigo",
        materias : [5, 3],
        notas: [5, 6],
        mail : "oliviarod@gmail.com",
     
        },
        {
          id: 46985222,
          nombre: "Louis Tomilson",
          materias : [3, 2],
          notas: [7, 8],
          mail : "louistom@gmail.com",
         
          },
          {
            id: 46985777,
            nombre: "Billie Eilish",
            materias : [6, 7],
            notas: [9, 10],
            mail : "billie@gmail.com",
          
            },
            {
              id: 46985000,
              nombre: "Dua Lipa",
              materias : [1, 8],
              notas:[11, 12],
              mail : "dualipa@gmail.com",
            
              },
              {
                id: 46985111,
                nombre: "Charles Leclerc",
                materias : [6, 4],
                notas: [13, 14],
                mail : "charleslrc@gmail.com",
              
                },
                {
                  id: 46985888,
                  nombre: "Lana del Rey",
                  materias : [8, 7],
                  notas: [15, 16],
                  mail : "lanadr@gmail.com",
                
                  }
  ];


  obtenerTodosLosAlumnos(): Alumno[] {
    return this.listaAlumnos;
  }

  buscarAlumnosPorNombre(nombre: string): Alumno[] {
    return this.listaAlumnos.filter(alumno =>
      alumno.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  obtenerAlumnoPorId(id: number):  Alumno | undefined {
    return this.listaAlumnos.find(alumno => alumno.id === id);
  }

  obtenerNotasAlumno(idAlumno: number): Set<Nota> {
    const notas: Set<Nota> = new Set<Nota>();
    const alumno = this.obtenerAlumnoPorId(idAlumno);

    if (alumno) {
      alumno.notas.forEach(id => {
        const nota = this.servicioNota.obtenerNotaPorId(id);
        if (nota) {
          notas.add(nota);
        }
      });
    }
    return notas;
  }*/
}



