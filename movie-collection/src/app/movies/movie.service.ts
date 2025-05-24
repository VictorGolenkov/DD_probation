import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[] = [
    {
      id: '1',
      title: 'Крёстный отец',
      year: 1972,
      genre: 'драма',
      rating: 9.2,
      posterUrl: 'https://example.com/poster1.jpg'
    }
  ];

  getMovies(): Movie[] {
    return this.movies.slice(); // Возвращаем копию массива
  }

  addMovie(movie: Movie): void {
    this.movies.push({ ...movie, id: Date.now().toString() });
  }

  deleteMovie(id: string): void {
    this.movies = this.movies.filter(m => m.id !== id);
  }
}