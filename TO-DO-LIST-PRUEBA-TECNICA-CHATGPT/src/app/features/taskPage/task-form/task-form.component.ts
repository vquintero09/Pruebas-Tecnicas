import { Component, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { addIcons } from 'ionicons';
import { addCircleOutline, alertCircleOutline } from 'ionicons/icons';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../../../core/services/task.service';
import { ITaks } from '../../../core/models/task.interface';
import { MatSnackBar } from '@angular/material/snack-bar'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CustomSnackbarComponent } from '@shared/custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
  animations: [
      trigger('slideDown', [
         state('void', style({ height: '0px', opacity: 0, marginTop: '0px', marginBottom: '0px' })),
         state('*', style({ height: '*', opacity: 1, marginTop: '*', marginBottom: '*' })),
         transition('void => *', animate('300ms ease-out')),
         transition('* => void', animate('200ms ease-in')),
      ]),
   ]
})
export class TaskFormComponent implements OnInit {
   private _formBuilder = inject(NonNullableFormBuilder);
   private _taskService = inject(TaskService);
   private _snackBar = inject(MatSnackBar);

   @Output() taskAdded = new EventEmitter<string>();

   taskForm!: FormGroup;
   subbmit: boolean = false;
   taskTitle: string = '';

   constructor() {
      addIcons({addCircleOutline, alertCircleOutline})
   };

   ngOnInit(): void {
      this.taskForm = this._formBuilder.group({
         title: ['', [Validators.required]],
         description: ['']
      })

   };

   onSubmit(){
      this.subbmit = true
      if(this.taskForm.valid) {
         const {title, description} = this.taskForm.getRawValue();
         const task: ITaks = {
            title: title,
            description: description,
            id: Date.now(),
            completed: false,
            createdAt: new Date()
         };
         this._taskService.addTask(task);
         this.taskForm.reset();
         this.subbmit = false;
         this.taskTitle = title;
         this.taskAdded.emit(this.taskTitle)
      }
      
   }

   inputInvalid(): boolean {
      return !!this.taskForm.get('title')?.hasError('required') && this.subbmit
   }

}
