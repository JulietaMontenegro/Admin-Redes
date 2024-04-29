import { Component } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MateriaComponent } from '../materia/materia.component';
import { Materia } from '../interfaces/materia';
import { MateriaService } from '../servicios/alumno/materia/materia.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    

  ],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  @Input() alumno!: Alumno;


}
