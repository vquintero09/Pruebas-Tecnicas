import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('******AUTH INTERCEPTOR*****');

    const authToken = this.getToken();

    //Clonamos la peticion y agregamos el header de autorización
    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    return next.handle(authRequest)
  }


  private getToken(): string {
    //Aqui tendriamos la logica para obtener el token por ejemplo del localStorage
    //Como simulación debolvemos un token estatico
    return 'mi-token-de-autenticacion-secreto';
  }
}

