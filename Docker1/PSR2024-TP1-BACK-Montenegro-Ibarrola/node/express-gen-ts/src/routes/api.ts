import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import AlumnoRoutes from './AlumnoRoutes';
import Alumno from '@src/models/Alumno';
import MateriaRoutes from './MateriaRoutes';
import Materia from '@src/models/Materia';
import NotaRoutes from './NotaRoutes';
import Nota from '@src/models/Nota';

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// ** Add UserRouter ** //

const alumnoRouter = Router();

// Get all users
alumnoRouter.get(
  '/',
  AlumnoRoutes.getAll,
);

alumnoRouter.get(
  '/:id',
  AlumnoRoutes.getOne,
);


// Add one user
alumnoRouter.post(
  '/',
  validate(['alumno', Alumno.isAlumno]),
  AlumnoRoutes.add,
);

// Update one user
alumnoRouter.put(
  '/:id',
  validate(['alumno', Alumno.isAlumno]),
  AlumnoRoutes.update,
);

alumnoRouter.patch(
  '/:id',
  validate(['alumno', Alumno.isAlumno]),
  AlumnoRoutes.update,
)

// Delete one user
alumnoRouter.delete(
  '/:id',
  validate(['id', 'number', 'params']),
  AlumnoRoutes.delete,
);






const materiaRouter = Router();

// Get all users
materiaRouter.get(
  '/',
  MateriaRoutes.getAll,
);

materiaRouter.get(
  '/:id',
  MateriaRoutes.getOne,
);


// Add one user
materiaRouter.post(
  '/',
  validate(['materia', Materia.isMateria]),
  MateriaRoutes.add,
);

// Update one user
materiaRouter.put(
  '/:id',
  validate(['materia', Materia.isMateria]),
  MateriaRoutes.update,
);

alumnoRouter.patch(
  '/:id',
  validate(['materia', Materia.isMateria]),
  MateriaRoutes.update,
)

// Delete one user
materiaRouter.delete(
  '/:id',
  validate(['id', 'number', 'params']),
  MateriaRoutes.delete,
);





const notaRouter = Router();

// Get all users
notaRouter.get(
  '/',
  NotaRoutes.getAll,
);

notaRouter.get(
  '/:id',
  NotaRoutes.getOne,
);


// Add one user
notaRouter.post(
  '/',
  validate(['nota', Nota.isNota]),
  NotaRoutes.add,
);

// Update one user
notaRouter.put(
  '/:id',
  validate(['nota', Nota.isNota]),
  NotaRoutes.update,
);

notaRouter.patch(
  '/:id',
  validate(['nota', Nota.isNota]),
  NotaRoutes.update,
)

// Delete one user
notaRouter.delete(
  '/:id',
  validate(['id', 'number', 'params']),
  NotaRoutes.delete,
);


// Add UserRouter
apiRouter.use(Paths.Alumnos.Base, alumnoRouter);
apiRouter.use(Paths.Materias.Base, materiaRouter);
apiRouter.use(Paths.Notas.Base, notaRouter)


// **** Export default **** //

export default apiRouter;
