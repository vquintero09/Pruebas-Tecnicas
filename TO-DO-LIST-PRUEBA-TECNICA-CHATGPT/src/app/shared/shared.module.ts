import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CustomSnackbarComponent
  ],
  exports: [CustomSnackbarComponent]
})
export class SharedModule { }
