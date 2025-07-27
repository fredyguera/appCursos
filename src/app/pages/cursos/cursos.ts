// filepath: c:\Users\k\Desktop\Modulo 2\RA2\appCursos\src\app\pages\cursos\cursos.ts
import { Component } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';
import { CURSOS } from '../../shared/data/cursos.data';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.html',
  imports: [CommonModule, NgIf],
  styleUrls: ['./cursos.css']
})
export class Cursos {
  cursos: Curso[] = CURSOS;
  cursoSeleccionado?: Curso;

  constructor(private router: Router) {}

  mostrarContenidos(curso: Curso) {
    this.cursoSeleccionado = curso;
  }

  verDetalleCurso(id: number) {
    this.router.navigate(['/cursos', id]);
  }
}