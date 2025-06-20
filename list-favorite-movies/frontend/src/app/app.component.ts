import { Component, inject, OnInit } from '@angular/core';
import { MoviesApiService } from '@core/services/movies-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private movieService = inject(MoviesApiService);


  ngOnInit(): void {
    this.movieService.searchMovies('batman')
  }
  title = 'list-favorite-movies';
}
