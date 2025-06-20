import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IMovie } from '@core/models/movie.interface';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { bookmark, bookmarkOutline } from 'ionicons/icons';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule, IonIcon, NgClass],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie!: IMovie;
  @Input() isFavorite: boolean = false;
  @Output() toggleFavorite = new EventEmitter<IMovie>();

  selectedIcon!: string;


  constructor() {
    addIcons({
      bookmarkOutline,
      bookmark
    });
  };

  handleOnToggle(){
    this.toggleFavorite.emit(this.movie);
  }
}
