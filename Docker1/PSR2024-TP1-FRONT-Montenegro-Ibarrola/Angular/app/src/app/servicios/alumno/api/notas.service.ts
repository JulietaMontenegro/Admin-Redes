import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nota } from '../../../interfaces/nota';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private urlApi = 'http://localhost:3000/notas';
  

  constructor(private http: HttpClient) { }

  public getNotas(): Observable<{ notas: Nota[] }> {
    return this.http.get<{ notas: Nota[] }>(this.urlApi);
  }
  public agregarNota(nuevaNota: { nota : Nota }): Observable<Nota> {
    console.log("Nuevo notita:", nuevaNota);
    return this.http.post<Nota>(this.urlApi, nuevaNota);
  }
  public obtenerNotaPorId(id: number): Observable<{ notas : Nota }> {
    const url = `${this.urlApi}/${id}`; 
    return this.http.get<{ notas: Nota }>(url);
  }
  
  public deleteNota(id: number) : Observable <any>{
    const url = `${this.urlApi}/${id}`; 
    return this.http.delete(url);
  }

  public actualizarNota(nuevaNota: { nota: Nota }): Observable<Nota> {
    const url = `${this.urlApi}/${nuevaNota.nota.id}`;
    return this.http.put<Nota>(url, nuevaNota);
  }

}
