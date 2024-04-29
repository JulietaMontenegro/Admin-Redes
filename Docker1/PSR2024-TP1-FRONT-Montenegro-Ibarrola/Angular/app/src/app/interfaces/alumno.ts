import { Materia } from "./materia";
import { Nota } from "./nota";

export interface Alumno {
    id: number;
    nombre: string;
    materias : number[];
    notas: number[];
    mail: string;
}
