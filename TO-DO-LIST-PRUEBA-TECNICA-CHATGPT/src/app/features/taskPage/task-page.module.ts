import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from '@features/taskPage/task-page.component';
import { TaskFormComponent } from '@features/taskPage/task-form/task-form.component';
import { TaskListComponent } from '@features/taskPage/task-list/task-list.component';
import { TaskFilterComponent } from '@features/taskPage/task-filter/task-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

import { IonIcon } from '@ionic/angular/standalone';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio'
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [TaskPageComponent, TaskFormComponent, TaskListComponent, TaskFilterComponent],
  imports: [CommonModule, MatCardModule, IonIcon, MatFormFieldModule, MatInput, MatRadioButton, ReactiveFormsModule, SharedModule],
  exports: [TaskPageComponent],
})
export class TaskPageModule { }
