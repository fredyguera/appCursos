import { Component } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';
import { CURSOS } from '../../shared/data/cursos.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl:'./cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  cursos: Curso[] = CURSOS; 

  constructor(private router: Router){}

  verDetalle(Param_id: number){
    this.router.navigate(['/cursos', Param_id])
  }
}
