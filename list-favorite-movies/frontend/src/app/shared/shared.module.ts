import { NgModule } from '@angular/core';
import { MovieNavigationComponent } from './components/movie-navigation/movie-navigation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  imports: [MovieNavigationComponent, SearchBarComponent],
  exports: [MovieNavigationComponent, SearchBarComponent],
  declarations: [],
  providers: [],
})
export class SharedModule { }
