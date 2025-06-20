import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ISearchResponse } from '@core/models/movie.interface';

@Injectable()
export class MoviesApiService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/search/';


  searchMovies(query: string): Observable<ISearchResponse> {
    const params = new HttpParams().set('q', query);
    return this.http.get<ISearchResponse>(this.apiUrl, {params}).pipe(
      map((res) => {
        if(res.Response === 'False'){
          throw new Error(res.Error || 'Pelicula no encontrada')
        }
        return res || [];
      }),
      catchError((err) => {
        console.error(`Error en busqueda: `, err.message);
        return throwError(() => new Error(err.message || 'Error en el servidor'))
      })
    )
  }
  
}
