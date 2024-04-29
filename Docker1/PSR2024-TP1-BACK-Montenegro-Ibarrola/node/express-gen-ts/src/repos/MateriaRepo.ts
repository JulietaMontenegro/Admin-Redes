import { IMateria } from '@src/models/Materia';
import MockOrmMaterias from './MockOrmMaterias';
import { getRandomInt } from '@src/util/misc';


// **** Functions **** //

/**
 * Get one materia.
 */
async function getOne(id: number): Promise<IMateria | null> {
  const db = await MockOrmMaterias.openDb();
  for (const materia of db.materias) {
    if (materia.id === id) {
      return materia;
    }
  }
  return null;
}

/**
 * See if a materia with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await MockOrmMaterias.openDb();
  for (const materia of db.materias) {
    if (materia.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all materias.
 */
async function getAll(): Promise<IMateria[]> {
  const db = await MockOrmMaterias.openDb();
  return db.materias;
}

/**
 * Add one materia.
 */
async function add(materia: IMateria): Promise<void> {
  const db = await MockOrmMaterias.openDb();
  materia.id = getRandomInt();
  db.materias.push(materia);
  return MockOrmMaterias.saveDb(db);
}

/**
 * Update a materia.
 */
async function update(materia: IMateria): Promise<void> {
  const db = await MockOrmMaterias.openDb();
  for (let i = 0; i < db.materias.length; i++) {
    if (db.materias[i].id === materia.id) {
      const dbMaterias = db.materias[i];
      db.materias[i] = {
        ...dbMaterias,
        id : materia.id,
        nombre: materia.nombre,
        nombreProfesor: materia.nombreProfesor,
        temas : materia.temas,
        foto : materia.foto,
        horarios : materia.horarios

      };
      return MockOrmMaterias.saveDb(db);
    }
  }
}

/**
 * Delete one materia.
 */
async function delete_(id: number): Promise<void> {
  const db = await MockOrmMaterias.openDb();
  for (let i = 0; i < db.materias.length; i++) {
    if (db.materias[i].id === id) {
      db.materias.splice(i, 1);
      return MockOrmMaterias.saveDb(db);
    }
  }
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
