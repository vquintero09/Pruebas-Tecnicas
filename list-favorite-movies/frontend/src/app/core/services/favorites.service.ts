import { Injectable } from '@angular/core';
import { IMovie } from '@core/models/movie.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteMoviesSubject = new BehaviorSubject<IMovie[]>(this.getMoviesFromLocalStore());
  favoriteMovies$ = this.favoriteMoviesSubject.asObservable();

  private getMoviesFromLocalStore(): IMovie[] {
    if(typeof localStorage !== 'undefined') {
      const storedMovies = localStorage.getItem('favMovies');
      return storedMovies ? JSON.parse(storedMovies) : []
    }
    return [];
  };

  private saveMoviesToLocalStore(FavoriteMovies: IMovie[]): void {
    localStorage.setItem('favMovies', JSON.stringify(FavoriteMovies));
  };

  private get currentValue(): IMovie[] {
    return this.favoriteMoviesSubject.getValue()
  };

  addFavoriteMovie(movie: IMovie): void {
    if(!this.isFavorite(movie.imdbID)) {
      const movies = [...this.currentValue, movie];
      this.favoriteMoviesSubject.next(movies);
      this.saveMoviesToLocalStore(movies)
    }
  };

  removeMovieFromFavorites(id: string): void {
    const updatedMovies = this.currentValue.filter(m => m.imdbID !== id);
    this.favoriteMoviesSubject.next(updatedMovies);
    this.saveMoviesToLocalStore(updatedMovies);
  }

  isFavorite(id: string): boolean {
    return this.currentValue.some(m => m.imdbID === id);
  }

  toggleFavorites(movie: IMovie):void {
    this.isFavorite(movie.imdbID)
      ? this.removeMovieFromFavorites(movie.imdbID)
      : this.addFavoriteMovie(movie)
  }
}
