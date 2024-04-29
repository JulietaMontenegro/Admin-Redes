import { Injectable } from '@angular/core';
import { Materia } from '../../../interfaces/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  /*protected listaMaterias : Materia[] = [
    {
    id: 1,
    nombre: "Matemática",
    nombreProfesor: "Emilia Mernes",
    temas: ['Combinatoria', 'Funciones', 'Derivadas', 'Integrales'],
    foto: 'assets/imagenes/matematica.jpg',
    horarios: "Lunes de 9 a 11"
    },
    {
      id: 2,
      nombre: "Literatura",
      nombreProfesor: "Bruno Mars",
      temas: ['Romeo y Julieta', 'Martin Fierro', 'La Oscuridad de los Colores', 'Los Ojos del Perro Siberiano'],
      foto: 'assets/imagenes/literatura.jpeg',
      horarios: "Martes de 10 a 12"
    },
    {
      id: 3,
      nombre: "Historia",
      nombreProfesor: "Valentín Oliva",
      temas: ['Primera Guerra Mundial', 'Segunda Guerra Mundial', 'Malvinas', 'Crisis de 1929'],
      foto: 'assets/imagenes/historia.jpg',
      horarios: "Miércoles de 8 a 10:30"
    },
    {
      id: 4,
      nombre: "Fisica",
      nombreProfesor: "Mateo Palacios",
      temas: ['Fuerzas', 'MRU', 'MRUV', 'Poleas'],
      foto: 'assets/imagenes/fisica.jpeg',
      horarios: "Lunes de 14 a 16"
    },
    {
      id: 5,
      nombre: "Programación",
      nombreProfesor: "Adele Laurie Blue Adkins",
      temas: ['C++', 'Introducción a POO', 'POO y MySQL', 'Proyecto final'],
      foto: 'assets/imagenes/prog.jpg',
      horarios: "Martes de 15 a 17"
    },
    {
      id: 6,
      nombre: "Ingles",
      nombreProfesor: "Martina Stoessel",
      temas: ['Introducción a los tiempos verbales', 'Passive-Active voices', 'Reported speech', 'Conditionals'],
      foto: 'assets/imagenes/ingles.jpg',
      horarios:"Jueves de 10 a 12"
    },
    {
      id: 7,
      nombre: "Ciudadanía",
      nombreProfesor: "Nicki Nicole",
      temas: ['Adolescencia', 'La Constitución', 'Derechos civiles', 'Derechos Políticos'],
      foto: 'assets/imagenes/ciudadania.jpg',
      horarios:"Lunes de 8 a 10"
    },
    {
      id: 8,
      nombre: "Química",
      nombreProfesor: "Zayn Malik",
      temas: ['Introducción a la Química', 'Estados de la Materia', 'Enlaces', 'Laboratorio'],
      foto: 'assets/imagenes/quimica.jpg',
      horarios: "Viernes de 10 a 12"
    }
    
    


  ]

  obtenerMateriaPorId(id: number):  Materia | undefined {
    return this.listaMaterias.find(materia => materia.id === id);
  }
*/
}
