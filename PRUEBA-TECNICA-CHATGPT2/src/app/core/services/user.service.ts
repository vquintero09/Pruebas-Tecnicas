import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private readonly http = inject(HttpClient);

  DataUser: IUser | null = null;

  constructor() { }

  register(user: IUser){
    this.DataUser = user
    //Simulamos una petición post al backend para que guarde los datos
    console.log(this.DataUser.age);
        
  };

  getDataUser(): IUser | null{
    return this.DataUser
  }
}
