/**
 * Express router paths go here.
 */


export default {
  Base: '/',
  PorId: '/alumnos/:id',
  Alumnos: {
    Base: '/alumnos',
    PorId: '/alumnos/:id',
    Get: '/alumnos',
    Add: '/alumnos', 
    Update: '/alumnos/:id',
    Delete: '/alumnos/:id',
  },
  Materias: {
    Base: '/materias',
    PorId: '/materias/:id',
    Get: '/materias',
    Add: '/materias', 
    Update: '/materias/:id',
    Delete: '/materias/:id',
  },
  Notas: {
    Base: '/notas',
    PorId: '/notas/:id',
    Get: '/notas',
    Add: '/notas', 
    Update: '/notas/:id',
    Delete: '/notas/:id',
  }
} as const;


