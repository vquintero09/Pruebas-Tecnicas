import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInput,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    MatProgressSpinnerModule
  ]
})
export class AuthModule { }
