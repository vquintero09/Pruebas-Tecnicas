import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from '@core/core.module';
import { RouterOutlet } from '@angular/router';
import { MovieNavigationComponent } from '@shared/components/movie-navigation/movie-navigation.component';
import { SearchPageModule } from '@features/search/pages/search-page.module';
import { FavoritesComponent } from '@features/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterOutlet,
    MovieNavigationComponent,
    SearchPageModule,
    FavoritesComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
