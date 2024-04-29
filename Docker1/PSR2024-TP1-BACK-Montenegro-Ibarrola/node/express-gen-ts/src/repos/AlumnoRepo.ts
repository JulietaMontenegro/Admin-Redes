import { IAlumno} from '@src/models/Alumno';
import orm from './MockOrm';


// **** Functions **** //

/**
 * Get one alumno.
 */
async function getOne(id: number): Promise<IAlumno | null> {
  const db = await orm.openDb();
  for (const alumno of db.alumnos) {
    if (alumno.id === id) {
      return alumno;
    }
  }
  return null;
}

/**
 * See if a alumno with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const alumno of db.alumnos) {
    if (alumno.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all alumnos.
 */
async function getAll(): Promise<IAlumno[]> {
  const db = await orm.openDb();
  return db.alumnos;
}

/**
 * Add one alumno.
 */
async function add(alumno: IAlumno): Promise<void> {
  const db = await orm.openDb();
  db.alumnos.push(alumno);
  return orm.saveDb(db);
}

/**
 * Update a alumno.
 */
async function update(alumno: IAlumno): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.alumnos.length; i++) {
    if (db.alumnos[i].id === alumno.id) {
      const dbAlumnos = db.alumnos[i];
      db.alumnos[i] = {
        ...dbAlumnos,
        id : alumno.id,
        nombre: alumno.nombre,
        mail: alumno.mail,
        materias : alumno.materias,
        notas : alumno.notas,

      };
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one alumno.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.alumnos.length; i++) {
    if (db.alumnos[i].id === id) {
      db.alumnos.splice(i, 1);
      return orm.saveDb(db);
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
