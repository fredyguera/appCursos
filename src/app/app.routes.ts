import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { CURSOS } from './shared/data/cursos.data';
import { NotFound } from './core/not-found/not-found';
import { DetalleCurso } from './pages/cursos/detalle-curso/detalle-curso';
import { Cursos } from './pages/cursos/cursos';

export const routes: Routes = [
    {
        path: '', component: Inicio
    },
    {
        path: 'inicio', component: Inicio
    },
    {
        path: 'cursos', component: Cursos
    },
    {
        path: 'cursos/:id', component: DetalleCurso
    },
    {
        path: '**', component: NotFound
    }
    ];