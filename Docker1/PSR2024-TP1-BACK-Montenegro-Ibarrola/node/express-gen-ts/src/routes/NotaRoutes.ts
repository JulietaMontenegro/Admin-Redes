import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';
import { INota } from '@src/models/Nota';
import NotaService from '@src/services/NotaService';



// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const notas = await NotaService.getAll();
  return res.status(HttpStatusCodes.OK).json({ notas });
}

async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const notas = await NotaService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({ notas });
}


/**
 * Add one user.
 */
async function add(req: IReq<{nota: INota}>, res: IRes) {
  const { nota } = req.body;
  await NotaService.addOne(nota);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<{nota: INota}>, res: IRes) {
  const id = +req.params.id;
  const { nota } = req.body;
  await NotaService.updateOne(id, nota);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await NotaService.delete(id);
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
