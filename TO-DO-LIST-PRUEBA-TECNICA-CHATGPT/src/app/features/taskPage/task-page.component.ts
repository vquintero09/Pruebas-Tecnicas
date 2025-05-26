import { Component, inject, OnInit } from '@angular/core';
import { addIcons } from 'ionicons'
import { checkmarkDoneOutline } from 'ionicons/icons';
import { TaskService } from '../../core/services/task.service';
@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent implements OnInit{
  private _taskService = inject(TaskService);
  completed!: number;
  incompletas!: number;
  showToast: boolean = false;
  filter: 'all' | 'pending' | 'completed' = 'all';
  toastMessage: string = '';
  
  constructor(){
    addIcons({checkmarkDoneOutline})
  } 

  ngOnInit() {
    this._taskService.task$.subscribe({
      next: (tasks) => {
        this.completed = tasks.filter(t => t.completed).length;
        this.incompletas = tasks.filter(t => !t.completed).length
      }
    })
  }

  setFilter(filter: string) {
    this.filter = filter as any;    
  }

  showToastCard(titulo: string) {
    this.toastMessage = `Tarea "${titulo}" agregada`;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
