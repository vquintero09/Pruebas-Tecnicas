import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ConfirmationComponent
  ],
  exports: [ConfirmationComponent]
})
export class SharedModule { }
