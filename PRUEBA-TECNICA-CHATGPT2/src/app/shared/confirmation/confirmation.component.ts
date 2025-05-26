import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IUser } from '@core/interfaces/user.interface';
import { UserService } from '@core/services/user.service';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons'
import { mailOutline, calendarClearOutline, personOutline} from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
  standalone: true,
  imports: [MatCardModule, IonIcon],
})
export class ConfirmationComponent implements OnInit {
  private readonly _userService = inject(UserService);
  private _Router = inject(Router);

  DataUserForm: IUser | null = null;

  constructor(){
    addIcons({personOutline, mailOutline, calendarClearOutline})
  }

  ngOnInit(): void {
    this.getDataUser()
  }

  getDataUser() {
    this.DataUserForm = this._userService.getDataUser();
    if (this.DataUserForm) {
      console.log(this.DataUserForm.age);
    } else {
      console.warn('No hay datos de usuario disponibles.');
    }
  };

  returnRegister() {
    this._Router.navigateByUrl('/')
  }
}
   
