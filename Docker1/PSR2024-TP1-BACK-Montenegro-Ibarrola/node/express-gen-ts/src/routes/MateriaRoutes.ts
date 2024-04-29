import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IMateria } from '@src/models/Materia';
import { IReq, IRes } from './types/express/misc';
import MateriaService from '@src/services/MateriaService';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const materias = await MateriaService.getAll();
  return res.status(HttpStatusCodes.OK).json({ materias });
}

async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const materias = await MateriaService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({ materias });
}


/**
 * Add one user.
 */
async function add(req: IReq<{materia: IMateria}>, res: IRes) {
  const { materia } = req.body;
  await MateriaService.addOne(materia);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<{materia: IMateria}>, res: IRes) {
  const id = +req.params.id;
  const { materia } = req.body;
  await MateriaService.updateOne(id, materia);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await MateriaService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getOne,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
