import { TestBed } from "@angular/core/testing";
import { MoviesApiService } from "./movies-api.service"
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

describe('MoviesApiService', () => {
  let service: MoviesApiService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        MoviesApiService
      ]
    })

    service = TestBed.inject(MoviesApiService);
    httpTesting = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTesting.verify(); // Verifica que no haya peticiones pendientes
  });

  test('Should search for the movies correctly', async () => {
    // given
    const query = 'Batman';
    const mockResponse = {
      Search: [
        { Title: 'Batman Begins', Year: '2005', imdbID: 'tt0372784', Type: 'movie', Poster: 'https://example.com/poster1.jpg' },
        { Title: 'The Dark Knight', Year: '2008', imdbID: 'tt0468569', Type: 'movie', Poster: 'https://example.com/poster2.jpg' }
      ],
      totalResults: '2',
      Response: 'True'
    };

    // when
    const search$ = service.searchMovies(query); //se llama al metodo que se quiere probar
    const searchPromise = firstValueFrom(search$); // se convierte el observable en una promesa

    const req = httpTesting.expectOne('http://localhost:3000/api/search/?q=Batman'); // se espera que se haga una peticion a esta url
    expect(req.request.method).toBe('GET'); // se verifica que el metodo de la peticion sea GET
    expect(req.request.urlWithParams).toContain(`q=${query}`); // se verifica que el parametro de la peticion sea el correcto

    req.flush(mockResponse); // Simulamos respuesta exitosa del servidor

    // then
    expect(await searchPromise).toEqual(mockResponse); // se verifica que la respuesta sea la esperada
  })
})