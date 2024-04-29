import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';
import { Materia } from '../interfaces/materia';

@Component({
  selector: 'app-materia',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './materia.component.html',
  styleUrl: './materia.component.css'
})
export class MateriaComponent {
  @Input() materia!: Materia;
}
