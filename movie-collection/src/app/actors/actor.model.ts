export interface Actor {
  id: string;
  name: string;
  birthDate: Date;
  country: string;
  movies: string[]; 
  photoUrl?: string;
}