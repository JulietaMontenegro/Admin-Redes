import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../../../interfaces/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private urlApi = 'http://localhost:3000/alumnos';
  

  constructor(private http: HttpClient) { }

  public getAlumnos(): Observable<{ alumnos: Alumno[] }> {
    return this.http.get<{ alumnos: Alumno[] }>(this.urlApi);
  }
  public agregarAlumno(nuevoAlumno: { alumno: Alumno }): Observable<Alumno> {
    console.log("Nuevo alumno:", nuevoAlumno);
    return this.http.post<Alumno>(this.urlApi, nuevoAlumno);
  }
  public obtenerAlumnoPorId(id: number): Observable<{ alumnos: Alumno }> {
    const url = `${this.urlApi}/${id}`; 
    return this.http.get<{ alumnos: Alumno }>(url);
  }
  
  public deleteAlumno(id: number) : Observable <any>{
    const url = `${this.urlApi}/${id}`; 
    return this.http.delete(url);
  }

  public actualizarAlumno(nuevoAlumno: { alumno: Alumno }): Observable<Alumno> {
    const url = `${this.urlApi}/${nuevoAlumno.alumno.id}`;
    return this.http.put<Alumno>(url, nuevoAlumno);
  }
  



}