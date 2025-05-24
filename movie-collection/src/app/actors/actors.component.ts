import { Component } from '@angular/core';
import { Actor } from './actor.model';
import { ActorService } from './actor.service';
import { MatDialog } from '@angular/material/dialog';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, DatePipe],
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
  providers: [
    provideAnimations()
  ],
})
export class ActorsComponent {
  displayedColumns: string[] = ['photo', 'name', 'birthDate', 'country', 'actions'];
  actors: Actor[] = [];

  constructor(
    private actorService: ActorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadActors();
  }

  loadActors(): void {
    this.actors = this.actorService.getActors();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ActorFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actorService.addActor(result);
        this.loadActors();
      }
    });
  }

  deleteActor(id: string): void {
    this.actorService.deleteActor(id);
    this.loadActors();
  }
}