export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: 'комедия' | 'драма' | 'фантастика'; // enum при желании
  rating: number;
  posterUrl: string;
}