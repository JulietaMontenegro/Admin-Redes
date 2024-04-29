import { Injectable, inject } from '@angular/core';
import { Nota } from '../../../interfaces/nota';
import { AlumnoService } from '../alumno/alumno.service';
import { Materia } from '../../../interfaces/materia';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
 
  /*protected listaNotas : Nota[] = [
    {
      id : 1,
      materiaId: 1,
      alumnoId: 46325129,
      tema: "Combinatoria",
      calificacion: 8
    },
    {
      id : 2,
      materiaId: 2,
      alumnoId: 46325129,
      tema: "Romeo y Julieta",
      calificacion: 10
    },
    {
      id : 3,
      materiaId: 3,
      alumnoId: 46985302,
      tema: "Primera Guerra Mundial",
      calificacion: 10
    },
    {
      id : 4,
      materiaId: 2,
      alumnoId: 46985302,
      tema: "Romeo y Julieta",
      calificacion: 10
    },
    {
      id : 5,
      materiaId: 5,
      alumnoId: 46985397,
      tema: "C++",
      calificacion: 7
    },
    {
      id : 6,
      materiaId: 3,
      alumnoId: 46985397,
      tema: "Primera Guerra Mundial",
      calificacion: 7
    },
    {
      id : 7,
      materiaId: 3,
      alumnoId: 46985222,
      tema: "Primera Guerra Mundial",
      calificacion: 6
    },
    {
      id : 8,
      materiaId: 2,
      alumnoId: 46985222,
      tema: "Romeo y Julieta",
      calificacion: 8
    },
    {
      id : 9,
      materiaId: 6,
      alumnoId: 46985777,
      tema: "Introducción a los tiempos verbales",
      calificacion: 10
    },
    {
      id : 10,
      materiaId: 7,
      alumnoId: 46985777,
      tema: "Adolescencia",
      calificacion: 8
    },
    {
      id : 11,
      materiaId: 1,
      alumnoId: 46985000,
      tema: "Combinatoria",
      calificacion: 5
    },
    {
      id : 12,
      materiaId: 8,
      alumnoId: 46985000,
      tema: "Introducción a la Química",
      calificacion: 7
    },
    {
      id : 13,
      materiaId: 6,
      alumnoId: 46985111,
      tema: "Introducción a los tiempos verbales",
      calificacion: 9
    },
    {
      id : 14,
      materiaId: 4,
      alumnoId: 46985111,
      tema: "Fuerzas",
      calificacion: 10
    },
    {
      id : 15,
      materiaId: 8,
      alumnoId: 46985888,
      tema: "Introducción a la Química",
      calificacion: 9
    },
    {
      id : 16,
      materiaId: 7,
      alumnoId: 46985888,
      tema: "Adolescencia",
      calificacion: 6
    },
    {
      id : 17,
      materiaId: 1,
      alumnoId: 46325129,
      tema: "Funciones",
      calificacion: 8
    }

  ]

  obtenerNotaPorId(idNota : number) : Nota | undefined {
    return this.listaNotas.find(nota => idNota === nota.id);
  }*/




}
