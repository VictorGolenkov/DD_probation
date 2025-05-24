import { Injectable } from '@angular/core';
import { Director } from './directors.model';

@Injectable({ providedIn: 'root' })
export class DirectorService {
  private directors: Director[] = [
    {
      id: '1',
      name: 'Квентин Тарантино',
      birthDate: new Date(1963, 2, 27),
      country: 'США',
      movies: ['1', '2'],
      awards: ['Оскар', 'Золотой глобус'],
      photoUrl: 'assets/director1.jpg'
    }
  ];

  getDirectors(): Director[] {
    return this.directors.slice();
  }

  addDirector(director: Omit<Director, 'id'>): void {
    this.directors.push({
      ...director,
      id: Date.now().toString()
    });
  }

  deleteDirector(id: string): void {
    this.directors = this.directors.filter(d => d.id !== id);
  }
}