import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { ITaks } from '@core/models/task.interface';
import { addIcons } from 'ionicons';
import { calendarClearOutline, checkmarkOutline, trashOutline } from 'ionicons/icons';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input() filter: string = 'all';
  private _taskService = inject(TaskService);
  tasks!: ITaks[];
  isCompleted: boolean = false;

  constructor() { 
    addIcons({calendarClearOutline, trashOutline, checkmarkOutline})
  }
  
  ngOnInit(): void {
    this._taskService.task$.subscribe({
      next: () => this.applyFilter()
    });    
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.applyFilter()
    }
  }
 
  private applyFilter(): void {
    this.tasks = this._taskService.filterTasks(this.filter)
  }

  ToggleCompleted(task: ITaks){
    this._taskService.toggleTask(task)
    this.isCompleted = !this.isCompleted
  }

  deleteTask(task: ITaks) {
    const id = task.id;
    this._taskService.deleteTask(id)
  }

 
}
