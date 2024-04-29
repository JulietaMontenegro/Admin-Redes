import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IAlumno {
  id: number;
  nombre: string;
  materias: number[];
  notas: number[];
  mail: string;
}


// **** Functions **** //

/**
 * Create new Alumno.
 */
function new_(
  id: number,
  nombre?: string,
  materias?: number[],
  notas?: number[],
  mail?: string, 
): IAlumno {
  return {
    id: id,
    nombre: (nombre ?? ''),
    materias: (materias ?? []),
    notas: (notas ?? []),
    mail: (mail ?? ''),
  };
}


/**
 * Get alumno instance from object.
 */
function from(param: object): IAlumno {
  if (!isAlumno(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IAlumno;
  return new_(p.id, p.nombre, p.materias, p.notas, p.mail);
}

/**
 * See if the param meets criteria to be a user.
 */
function isAlumno(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof (arg as any)['id'] === 'number' && 
    'nombre' in arg && typeof (arg as any)['nombre'] === 'string' && 
    'materias' in arg && Array.isArray((arg as any)['materias']) && 
    'notas' in arg && Array.isArray((arg as any)['notas']) && 
    'mail' in arg && typeof (arg as any)['mail'] === 'string'
  );
}





// **** Export default **** //

export default {
  new: new_,
  from,
  isAlumno,
} as const;
