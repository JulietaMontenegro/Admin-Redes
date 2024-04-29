

import jsonfile from 'jsonfile';

import { IMateria } from '@src/models/Materia';


// **** Variables **** //

const DB_FILE_NAME = 'materiasdb.json';


// **** Types **** //

interface IDbMateria {
  materias: IMateria[];
}




// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDbMateria> {
  return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDbMateria>;
}

/**
 * Update the file.
 */
function saveDb(db: IDbMateria): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
