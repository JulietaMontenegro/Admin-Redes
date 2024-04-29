import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../servicios/alumno/api/materias.service';
import { Materia } from '../interfaces/materia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-materias',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './info-materias.component.html',
  styleUrl: './info-materias.component.css'
})
export class InfoMateriasComponent implements OnInit{
  materias: Materia[] = [];

  constructor(private materiasService: MateriasService) { }

  ngOnInit(): void {
    this.materiasService.getMaterias().subscribe(
      response => {
        console.log(response)
        this.materias = response.materias;
      },
      error => {
        console.error('Error al obtener materias:', error);
      }
    );
  }
}
