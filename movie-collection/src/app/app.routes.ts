import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'movies',
    loadComponent: () => import('./movies/movies.component').then(m => m.MoviesComponent) 
  },
  { 
    path: 'actors',
    loadComponent: () => import('./actors/actors.component').then(m => m.ActorsComponent) 
  },
  { 
    path: 'directors',
    loadComponent: () => import('./directors/directors.component').then(m => m.DirectorsComponent) 
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', redirectTo: '/movies' } // Опционально: 404
];
