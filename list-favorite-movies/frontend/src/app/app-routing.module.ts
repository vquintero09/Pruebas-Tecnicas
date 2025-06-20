import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { AppComponent } from './app.component';
import { SearchPageComponent } from '@features/search/pages/search-page.component';
import { FavoritesComponent } from '@features/favorites/favorites.component';

const routes: Routes = [
  {path: 'search-page', component: SearchPageComponent},
  { path: 'favorite-movies', component: FavoritesComponent},
  { path: '', redirectTo: '/search-page', pathMatch: 'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
