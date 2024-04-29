import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../../../interfaces/materia';


@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private urlApi = 'http://localhost:3000/materias';
  

  constructor(private http: HttpClient) { }

  public getMaterias(): Observable<{ materias : Materia[] }> {
    return this.http.get<{ materias: Materia[] }>(this.urlApi);
  }
  public postMateria(nuevaMateria: { materia: Materia }): Observable<Materia> {
    return this.http.post<Materia>(this.urlApi, nuevaMateria);
  }
  public obtenerMateriaPorId(id: number): Observable<Materia> {
    const url = `${this.urlApi}/${id}`; 
    return this.http.get<Materia>(url);
  }
  public deleteMateria(id: number) : Observable <any>{
    const url = `${this.urlApi}/${id}`; 
    return this.http.delete(url);
  }


  public actualizarMateria(nuevaMateria: { materia: Materia }): Observable<Materia> {
    const url = `${this.urlApi}/${nuevaMateria.materia.id}`;
    return this.http.put<Materia>(url, nuevaMateria);
  }
}
