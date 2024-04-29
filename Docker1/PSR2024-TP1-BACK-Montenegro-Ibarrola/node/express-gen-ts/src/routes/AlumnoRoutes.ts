import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import AlumnoService from '@src/services/AlumnoService';
import { IAlumno } from '@src/models/Alumno';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const alumnos = await AlumnoService.getAll();
  return res.status(HttpStatusCodes.OK).json({ alumnos });
}

async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const alumnos = await AlumnoService.getOne(id);
  return res.status(HttpStatusCodes.OK).json({ alumnos });
}


/**
 * Add one user.
 */
async function add(req: IReq<{alumno: IAlumno}>, res: IRes) {
  const { alumno } = req.body;
  await AlumnoService.addOne(alumno);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<{alumno: IAlumno}>, res: IRes) {
  const id = +req.params.id;
  const { alumno } = req.body;
  await AlumnoService.updateOne(id, alumno);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await AlumnoService.delete(id);
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
