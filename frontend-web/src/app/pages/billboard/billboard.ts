import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie_service';
import { Movie } from '../../interfaces/movie-db/movie';
import { BillboardService } from '../../core/services/billboard_service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-billboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billboard.html',
  styleUrl: './billboard.scss'
})
export class Billboard implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private billboardService: BillboardService) {}

  ngOnInit(): void {
    this.billboardService.getMoviesWithCine().subscribe((ids: number[]) => {
      if (ids.length === 0) {
        this.movies = [];
        return;
      }
      forkJoin(ids.map(id => this.movieService.getMovieDetails(id))).subscribe(movies => {
        this.movies = movies
          .filter(Boolean)
          .sort((a, b) => a.title.localeCompare(b.title));
      });
    });
  }
}