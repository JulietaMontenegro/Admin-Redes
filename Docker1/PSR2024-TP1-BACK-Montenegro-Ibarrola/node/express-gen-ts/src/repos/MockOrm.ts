

import jsonfile from 'jsonfile';

import { IAlumno } from '@src/models/Alumno';



// **** Variables **** //

const DB_FILE_NAME = 'alumnosdb.json';


// **** Types **** //

interface IDbAlumno {
  alumnos: IAlumno[];
}




// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDbAlumno> {
  return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDbAlumno>;
}

/**
 * Update the file.
 */
function saveDb(db: IDbAlumno): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
