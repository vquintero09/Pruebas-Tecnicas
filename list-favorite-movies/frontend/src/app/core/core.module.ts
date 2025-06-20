import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { MoviesApiService } from './services/movies-api.service';


@NgModule({
  imports: [ HttpClientModule ],
  exports: [],
  declarations: [],
  providers: [ MoviesApiService ],

})
export class CoreModule { }
