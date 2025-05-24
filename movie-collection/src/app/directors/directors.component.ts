import { Component } from '@angular/core';
import { Director } from './directors.model';
import { DirectorService } from './directors.service';
import { MatDialog } from '@angular/material/dialog';
import { DirectorFormComponent } from './directors-form/directors-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common'; 
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-directors',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    DatePipe,
    MatChipsModule,
    CommonModule,
    NgFor
  ],
  providers: [
    provideAnimations()
  ],
  templateUrl: './directors.component.html',
  styleUrl: './directors.component.css'
})
export class DirectorsComponent {
  displayedColumns: string[] = ['photo', 'name', 'birthDate', 'country', 'awards', 'actions'];
  directors: Director[] = [];

  constructor(
    private directorService: DirectorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadDirectors();
  }

  loadDirectors(): void {
    this.directors = this.directorService.getDirectors();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(DirectorFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.directorService.addDirector(result);
        this.loadDirectors();
      }
    });
  }

  deleteDirector(id: string): void {
    this.directorService.deleteDirector(id);
    this.loadDirectors();
  }
}