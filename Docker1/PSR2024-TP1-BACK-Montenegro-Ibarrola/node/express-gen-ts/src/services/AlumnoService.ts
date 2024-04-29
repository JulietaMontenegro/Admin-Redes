import AlumnoRepo from '@src/repos/AlumnoRepo';
import { IAlumno } from '@src/models/Alumno';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

export const ALUMNO_NOT_FOUND_ERR = 'User not found';


// **** Functions **** //

/**
 * Get all alumnos.
 */
function getAll(): Promise<IAlumno[]> {
  return AlumnoRepo.getAll();
}

async function getOne(id :number): Promise<IAlumno | null> {
  const persists = await AlumnoRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ALUMNO_NOT_FOUND_ERR,
    );
  }
  
  return AlumnoRepo.getOne(id);
}


/**
 * Add one alumno.
 */
function addOne(alumno: IAlumno): Promise<void> {
  return AlumnoRepo.add(alumno);
}

/**
 * Update one alumno.
 */
async function updateOne(id :number, alumno: IAlumno): Promise<void> {
  const persists = await AlumnoRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ALUMNO_NOT_FOUND_ERR,
    );
  }
  // Return alumno
  return AlumnoRepo.update(alumno);
}

/**
 * Delete a alumno by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await AlumnoRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      ALUMNO_NOT_FOUND_ERR,
    );
  }
  // Delete alumno
  return AlumnoRepo.delete(id);
}


// **** Export default **** //

export default {
  getOne,
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
