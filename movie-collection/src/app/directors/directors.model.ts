export interface Director {
  id: string;
  name: string;
  birthDate: Date;
  country: string;
  movies: string[]; // ID фильмов
  awards?: string[];
  photoUrl?: string;
}