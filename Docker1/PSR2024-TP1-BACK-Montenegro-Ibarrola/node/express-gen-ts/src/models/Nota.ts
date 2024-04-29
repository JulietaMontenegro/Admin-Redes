import moment from 'moment';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface INota {
  id: number;
  materiaId: number;
  alumnoId: number;
  tema: string;
  calificacion: number;
}


// **** Functions **** //

/**
 * Create new Nota.
 */
function new_(
  id: number,
  materiaId : number,
  alumnoId : number,
  tema : string, 
  calificacion : number
): INota{
  return {
    id: (id ?? -1),
    materiaId: materiaId,
    alumnoId: alumnoId,
    tema: (tema ?? ''),
    calificacion: calificacion,
  };
}


/**
 * Get nota instance from object.
 */
function from(param: object): INota{
  if (!isNota(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as INota;
  return new_(p.id, p.materiaId, p.alumnoId, p.tema, p.calificacion);
}

/**
 * See if the param meets criteria to be a user.
 */
function isNota(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof (arg as any)['id'] === 'number' && 
    'materiaId' in arg && typeof (arg as any)['materiaId'] === 'number' && 
    'alumnoId' in arg && typeof (arg as any)['alumnoId'] === 'number' && 
    'tema' in arg && typeof (arg as any)['tema'] === 'string' && 
    'calificacion' in arg && typeof (arg as any)['calificacion'] === 'number'
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isNota,
} as const;
