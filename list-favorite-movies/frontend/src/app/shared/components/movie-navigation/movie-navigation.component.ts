import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonIcon } from "@ionic/angular/standalone"
import { addIcons } from 'ionicons';
import { filmOutline, searchOutline, heartOutline } from 'ionicons/icons';



@Component({
  selector: 'app-movie-navigation',
  standalone: true,
  imports: [IonIcon, RouterLink, RouterLinkActive],
  templateUrl: './movie-navigation.component.html',
  styleUrl: './movie-navigation.component.scss'
})
export class MovieNavigationComponent {

  constructor(){
    addIcons({filmOutline, searchOutline, heartOutline})
  }
  
}
