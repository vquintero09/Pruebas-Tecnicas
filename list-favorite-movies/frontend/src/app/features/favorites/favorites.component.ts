import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IMovie } from '@core/models/movie.interface';
import { FavoritesService } from '@core/services/favorites.service';
import { MovieCardComponent } from "../../shared/components/movie-card/movie-card.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NgIf, MovieCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  private favoriteService = inject(FavoritesService); 
  favoriteMovies: IMovie[] = [];

  ngOnInit() {
    this.favoriteService.favoriteMovies$.subscribe({
      next: (value) => {
        this.favoriteMovies = value;
      } 
    })
  }

  handleToggleFavorite(movie: IMovie): void {
    this.favoriteService.toggleFavorites(movie);
  }

}
