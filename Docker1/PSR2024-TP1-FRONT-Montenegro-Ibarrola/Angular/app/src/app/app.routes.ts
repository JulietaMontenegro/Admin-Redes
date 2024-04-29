import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DetallealumnoComponent } from './detallealumno/detallealumno.component';
import { MateriaComponent } from './materia/materia.component';
import { DetallemateriaComponent } from './detallemateria/detallemateria.component';
import { NotaComponent } from './nota/nota.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { DeleteAlumnoComponent } from './delete-alumno/delete-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { AddNotaComponent } from './add-nota/add-nota.component';
import { DeleteNotaComponent } from './delete-nota/delete-nota.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { AddMateriaComponent } from './add-materia/add-materia.component';
import { DeleteMateriaComponent } from './delete-materia/delete-materia.component';
import { EditMateriaComponent } from './edit-materia/edit-materia.component';
import { InfoMateriasComponent } from './info-materias/info-materias.component';
import { AddTemaComponent } from './add-tema/add-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { AddMateriaAlumnoComponent } from './add-materia-alumno/add-materia-alumno.component';
import { DeleteMateriaAlumnoComponent } from './delete-materia-alumno/delete-materia-alumno.component';


export const routes: Routes = [
    {   path: '', 
        redirectTo: '/alumnos', 
        pathMatch: 'full' 
    },
    {
        path: 'alumnos',
        component: InicioComponent,
        title: 'Pagina Inicio'
      },
      {
        path: 'alumnos/:id',
        component: DetallealumnoComponent,
        title: 'Alumno'
      },
      {
        path: 'materias/:id',
        component: DetallemateriaComponent,
        title: 'Materia'
      },
      {
        path: 'notas/:id',
        component: NotaComponent,
        title: 'Materia'
      },
      {
        path: 'agregarAlumno',
        component: AddAlumnoComponent,
        title: 'Agregar Alumno'
      },
      { path: 'alumnos/:id', 
        component: DetallealumnoComponent 
      },
      {
        path: 'eliminarAlumno',
        component : DeleteAlumnoComponent
      },
      {
        path: 'editarAlumno/:id',
        component : EditarAlumnoComponent
      },
      {
        path: 'agregarNota/:id',
        component : AddNotaComponent,
        title : "Agregar Nota"
      },
      {
        path : 'eliminarNota/:id',
        component : DeleteNotaComponent,
        title : "Eliminar Nota"
      },
      {
        path: 'editarNota/:id',
        component : EditarNotaComponent,
        title : "Editar Nota"
      },
      {
        path: 'agregarMateria',
        component : AddMateriaComponent,
        title : "Agregar Materia"
      },
      {
        path: 'eliminarMateria',
        component: DeleteMateriaComponent,
        title : "Eliminar Materia"
      },
      {
        path : 'modificarMateria/:id',
        component :EditMateriaComponent,
        title :"Modificar Materia"
      },
      {
        path : 'infoMaterias',
        component: InfoMateriasComponent,
        title : "Info Materias"
      },
      {
        path: 'agregarTema/:id',
        component : AddTemaComponent,
        title : "Agregar Tema"
      },
      {
        path : 'eliminarTema/:id',
        component : DeleteTemaComponent,
        title : "Eliminar Tema"
      },
      {
        path : 'agregarMateriaAlumno/:id',
        component : AddMateriaAlumnoComponent,
        title : "Agregar Materia"
      },
      {
        path : 'eliminarMateriaAlumno/:id',
        component : DeleteMateriaAlumnoComponent,
        title : "Eliminar Materia"
      }
];

export default routes;
