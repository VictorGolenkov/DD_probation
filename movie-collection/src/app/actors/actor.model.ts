export interface Actor {
  id: string;
  name: string;
  birthDate: Date;
  country: string;
  movies: string[]; // ID фильмов, в которых снимался актёр
  photoUrl?: string;
}