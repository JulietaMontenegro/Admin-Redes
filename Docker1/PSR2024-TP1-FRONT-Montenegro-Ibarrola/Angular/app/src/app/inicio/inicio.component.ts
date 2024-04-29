import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Alumno } from '../interfaces/alumno';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from '../alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { AlumnosService } from '../servicios/alumno/api/AlumnosService';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    AlumnoComponent,
    FormsModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {
  nombreBusqueda: string = '';
  alumnos : Alumno[] =[];

  constructor(private apiService: AlumnosService) {
   }
   
  ngOnInit(): void {
    this.listarAlumnos();
  }


  listarAlumnos(): void {
    this.apiService.getAlumnos().subscribe(response => {
      if (response && response.alumnos) {
        this.alumnos = response.alumnos;
      } else {
        console.error('Error: No se pudo obtener la lista de alumnos');
      }
    });
  }
  
  buscarAlumnos(nombre: string): void {
    if (nombre.trim() === '') {
      this.listarAlumnos(); 
    } else {
      this.alumnos = this.alumnos.filter(alumno => alumno.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }
  }
  

}
