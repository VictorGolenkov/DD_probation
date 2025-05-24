import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieFormComponent } from './movie-form/movie-form.component'; // Форма для добавления
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatToolbarModule, 
    MatTableModule, 
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class MoviesComponent {
  displayedColumns: string[] = ['poster', 'title', 'year', 'genre', 'rating'];
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movies = this.movieService.getMovies();
  }

openAddDialog(): void {
    const dialogRef = this.dialog.open(MovieFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.movieService.addMovie(result);
        this.loadMovies();
      }
    });
  }

}
