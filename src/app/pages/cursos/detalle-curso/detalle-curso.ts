import { Component } from '@angular/core';
import { Curso } from '../../../shared/models/curso.model';
import { ActivatedRoute } from '@angular/router';
import { CURSOS } from '../../../shared/data/cursos.data';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  imports: [NgIf, RouterModule], // Solo si usas standalone components
  templateUrl: './detalle-curso.html',
  styleUrls: ['./detalle-curso.css'] // Corregido aquí
})
export class DetalleCurso {
  curso?: Curso;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.curso = CURSOS.find(c => c.id === id);
    console.log(this.curso);
  }
}