

import jsonfile from 'jsonfile';

import { INota } from '@src/models/Nota';


// **** Variables **** //

const DB_FILE_NAME = 'notasdb.json';


// **** Types **** //

interface IDbNotas {
  notas: INota[];
}




// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDbNotas> {
  return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDbNotas>;
}

/**
 * Update the file.
 */
function saveDb(db: IDbNotas): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
