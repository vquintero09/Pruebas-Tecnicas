import { Component, inject, OnInit } from '@angular/core';
import { IMovie, ISearchResponse } from '@core/models/movie.interface';
import { FavoritesService } from '@core/services/favorites.service';
import { MoviesApiService } from '@core/services/movies-api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent implements OnInit  {
 
  private moviesService = inject(MoviesApiService);
  private favoriteService = inject(FavoritesService);

  foundMovies: IMovie[] = [];
  favoriteMovies: IMovie[] = [];
  loading: boolean = false;
  error: string | null = null;

 ngOnInit() {
    this.favoriteService.favoriteMovies$.subscribe({
      next: (value) => this.favoriteMovies = value
    })
  };
  
  handleWordEmitted(search: string){
    this.loading = true;
    this.error = null;

    this.moviesService.searchMovies(search).subscribe({
      next: (value) => {
        this.foundMovies = value.Search;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false
      }
    })
  }

  handleToggleFavorite(movie: IMovie) {
    this.favoriteService.toggleFavorites(movie)
  }
}
