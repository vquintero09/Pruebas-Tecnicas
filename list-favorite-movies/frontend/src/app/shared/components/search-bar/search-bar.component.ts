import { Component, EventEmitter, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatError } from '@angular/material/form-field'
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [IonIcon, FormsModule, NgIf, MatError ],
  styleUrl: './search-bar.component.scss',
  template: `
    <form (ngSubmit)="handleTerm(searchInput ,formRef)" #formRef="ngForm">
      <div class="w-full h-10 flex mx-auto bg-gray-800 border-2 border-gray-600 items-center pl-4 rounded-lg focus-within:border-[3px] focus-within:border-white">
        <ion-icon name="search-outline" class="text-white text-xl"></ion-icon>
        <input class="w-full h-full bg-transparent outline-none text-white border-0  pl-2" type="text" name ="search" placeholder="Buscar por título o genero" [(ngModel)]="search" required #searchInputRef="ngModel" #searchInput >
      </div>
      <mat-error *ngIf="submitted && searchInputRef.invalid" class="text-red-500">Titulo requerido</mat-error>
    </form>
  `
})
export class SearchBarComponent {
  @Output() outputSearch = new EventEmitter<string>();
  search:string = '';
  submitted: boolean = false

  constructor(){
    addIcons({searchOutline})
  }

  handleTerm(input: HTMLInputElement ,form: NgForm){
    this.submitted = true
    if(form.valid) {
      this.outputSearch.emit(this.search);
      form.resetForm();
      input.blur()
      this.submitted = false
    }


  }


}
