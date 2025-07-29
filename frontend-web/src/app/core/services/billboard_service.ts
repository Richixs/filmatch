import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {
  private apiUrl = 'http://localhost:8000/api/billboards/movies-with-cine/';

  constructor(private http: HttpClient) {}

  getMoviesWithCine(): Observable<number[]> {
    return this.http.get<number[]>(this.apiUrl);
  }
}