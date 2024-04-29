import NotaRepo from '@src/repos/NotaRepo';
import Nota, { INota } from '@src/models/Nota';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

export const NOTA_NOT_FOUND_ERR = 'Nota not found';


// **** Functions **** //

/**
 * Get all notas.
 */
function getAll(): Promise<INota[]> {
  return NotaRepo.getAll();
}

async function getOne(id :number): Promise<INota | null> {
  const persists = await NotaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      NOTA_NOT_FOUND_ERR,
    );
  }
  
  return NotaRepo.getOne(id);
}


/**
 * Add one nota.
 */
function addOne(nota: INota): Promise<void> {
  return NotaRepo.add(nota);
}

/**
 * Update one nota.
 */
async function updateOne(id :number, nota: INota): Promise<void> {
  const persists = await NotaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      NOTA_NOT_FOUND_ERR,
    );
  }
  // Return nota
  return NotaRepo.update(nota);
}

/**
 * Delete a nota by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await NotaRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      NOTA_NOT_FOUND_ERR,
    );
  }
  // Delete nota
  return NotaRepo.delete(id);
}


// **** Export default **** //

export default {
  getOne,
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
