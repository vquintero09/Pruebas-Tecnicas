import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';

import { IonIcon } from '@ionic/angular/standalone'
import { MovieCardComponent } from '@shared/components/movie-card/movie-card.component';
import { SearchResultsComponent } from '../components/search-results/search-results.component';

@NgModule({
  declarations: [
    SearchPageComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    SearchBarComponent,
    MovieCardComponent,
    IonIcon,
    NgIf
  ], 
  exports: [SearchPageComponent]
})
export class SearchPageModule { }
