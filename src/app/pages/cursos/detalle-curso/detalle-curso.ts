import { Component } from '@angular/core';
import { Curso } from '../../../shared/models/curso.model';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CURSOS } from '../../../shared/data/cursos.data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-curso',
  imports: [NgIf, RouterModule],
  templateUrl:'./detalle-curso.html',
  styleUrl: './detalle-curso.css'
})
export class DetalleCurso {
  curso?:Curso;

  constructor(private route: ActivatedRoute){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.curso = CURSOS.find(c => c.id === id);
    console.log(this.curso);
  }
}
