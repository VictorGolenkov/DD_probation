export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: 'комедия' | 'драма' | 'фантастика'; 
  rating: number;
  posterUrl: string;
}