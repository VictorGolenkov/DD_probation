import { Injectable } from '@angular/core';
import { Actor } from './actor.model';

@Injectable({ providedIn: 'root' })
export class ActorService {
  private actors: Actor[] = [
    {
      id: '1',
      name: 'Том Хэнкс',
      birthDate: new Date(1956, 6, 9),
      country: 'США',
      movies: ['1', '2'],
      photoUrl: 'https://victorgolenkov.github.io/DD_probation/movie-collection/public/actor1.jpg'
    }
  ];

  getActors(): Actor[] {
    return this.actors.slice();
  }

  addActor(actor: Omit<Actor, 'id'>): void {
    this.actors.push({
      ...actor,
      id: Date.now().toString()
    });
  }

  deleteActor(id: string): void {
    this.actors = this.actors.filter(a => a.id !== id);
  }
}