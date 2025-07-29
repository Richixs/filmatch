import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie-db/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiBaseUrl = 'https://api.themoviedb.org/3/movie';
  private apiKey = '51036d9a6b872d1d73d2ac530ef8d462';
  private language = 'es-MX';

  constructor(private http: HttpClient) {}

  getMovieDetails(id: number): Observable<Movie> {
    const url = `${this.apiBaseUrl}/${id}?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<Movie>(url);
  }
}