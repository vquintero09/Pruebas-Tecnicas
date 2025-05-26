import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrl: './custom-snackbar.component.scss',
  standalone: true,
  imports: [NgIf]
})
export class CustomSnackbarComponent {
  @Input() title: string = '';
  @Input() showToast: boolean = false;

  
  
}
