import MateriaRepo from '@src/repos/MateriaRepo';
import { IMateria } from '@src/models/Materia';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

export const MATERIA_NOT_FOUND_ERR = 'Materia not found';


// **** Functions **** //

/**
 * Get all materias.
 */
function getAll(): Promise<IMateria[]> {
  return MateriaRepo.getAll();
}

async function getOne(id :number): Promise<IMateria | null> {
  const persists = await MateriaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      MATERIA_NOT_FOUND_ERR,
    );
  }
  
  return MateriaRepo.getOne(id);
}


/**
 * Add one materias.
 */
function addOne(materia: IMateria): Promise<void> {
  return MateriaRepo.add(materia);
}

/**
 * Update one materia.
 */
async function updateOne(id :number, materia: IMateria): Promise<void> {
  const persists = await MateriaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      MATERIA_NOT_FOUND_ERR,
    );
  }
  // Return materia
  return MateriaRepo.update(materia);
}

/**
 * Delete a materia by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await MateriaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      MATERIA_NOT_FOUND_ERR,
    );
  }
  // Delete materia
  return MateriaRepo.delete(id);
}


// **** Export default **** //

export default {
  getOne,
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
