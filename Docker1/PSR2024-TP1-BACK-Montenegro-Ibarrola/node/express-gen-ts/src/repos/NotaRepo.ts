
import MockOrmNotas from './MockOrmNotas';
import { INota } from '@src/models/Nota';
import { getRandomInt } from '@src/util/misc';

// **** Functions **** //

/**
 * Get one nota.
 */
async function getOne(id: number): Promise<INota| null> {
  const db = await MockOrmNotas.openDb();
  for (const nota of db.notas) {
    if (nota.id === id) {
      return nota;
    }
  }
  return null;
}

/**
 * See if a nota with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await MockOrmNotas.openDb();
  for (const nota of db.notas) {
    if (nota.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all notas.
 */
async function getAll(): Promise<INota[]> {
  const db = await MockOrmNotas.openDb();
  return db.notas;
}

/**
 * Add one nota.
 */
async function add(notas: INota): Promise<void> {
  const db = await MockOrmNotas.openDb();
  notas.id = getRandomInt();
  db.notas.push(notas);
  return MockOrmNotas.saveDb(db);
}

/**
 * Update a nota.
 */
async function update(nota: INota): Promise<void> {
  const db = await MockOrmNotas.openDb();
  for (let i = 0; i < db.notas.length; i++) {
    if (db.notas[i].id === nota.id) {
      const dbNotas = db.notas[i];
      db.notas[i] = {
        ...dbNotas,
      
        materiaId: nota.materiaId,
        alumnoId: nota.alumnoId,
        tema : nota.tema,
        calificacion : nota.calificacion
      };
      return MockOrmNotas.saveDb(db);
    }
  }
}

/**
 * Delete one nota.
 */
async function delete_(id: number): Promise<void> {
  const db = await MockOrmNotas.openDb();
  for (let i = 0; i < db.notas.length; i++) {
    if (db.notas[i].id === id) {
      db.notas.splice(i, 1);
      return MockOrmNotas.saveDb(db);
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
