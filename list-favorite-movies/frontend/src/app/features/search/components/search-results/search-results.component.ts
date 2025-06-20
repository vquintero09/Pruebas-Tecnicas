import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from '@core/models/movie.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  @Input() movies: IMovie[] = [];
  @Input() favoriteMovies: IMovie[] = [];
  @Output() toggleFavorite = new EventEmitter<IMovie>();
  
  isFavorite(id: string): boolean {
    return this.favoriteMovies.some(m => m.imdbID === id)
  }

  handleOnToggle(movie: IMovie) {
    this.toggleFavorite.emit(movie)
  }
}
