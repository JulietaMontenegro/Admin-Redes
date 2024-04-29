import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IMateria {
  id: number;
  nombre: string;
  nombreProfesor: string;
  temas: number[];
  foto: string;
  horarios: string;
}


// **** Functions **** //

/**
 * Create new Materia.
 */
function new_(
  id?: number,
  nombre?: string,
  nombreProfesor?: string,
  temas?: number[],
  foto?: string, 
  horarios?: string, 
): IMateria {
  return {
    id: (id ?? -1),
    nombre: (nombre ?? ''),
    nombreProfesor: (nombreProfesor ?? ''),
    temas: (temas ?? []),
    foto: (foto ?? ''),
    horarios: (horarios ?? ''),
  };
}


/**
 * Get materia instance from object.
 */
function from(param: object): IMateria{
  if (!isMateria(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IMateria;
  return new_(p.id, p.nombre, p.nombreProfesor, p.temas, p.foto, p.horarios);
}

/**
 * See if the param meets criteria to be a user.
 */
function isMateria(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof (arg as any)['id'] === 'number' && 
    'nombre' in arg && typeof (arg as any)['nombre'] === 'string' && 
    'nombreProfesor' in arg && typeof (arg as any)['nombreProfesor'] === 'string' && 
    'temas' in arg && Array.isArray((arg as any)['temas']) && 
    'foto' in arg && typeof (arg as any)['foto'] === 'string' &&
    'horarios' in arg && typeof (arg as any)['horarios'] === 'string'
  );
}





// **** Export default **** //

export default {
  new: new_,
  from,
  isMateria,
} as const;
