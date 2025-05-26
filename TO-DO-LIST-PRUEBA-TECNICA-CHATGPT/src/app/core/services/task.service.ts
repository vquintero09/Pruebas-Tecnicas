import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITaks } from '../models/task.interface';


@Injectable()
export class TaskService {

  private tasksSubject = new BehaviorSubject<ITaks[]>(this.getTasksFromLocalStorage());
  task$ = this.tasksSubject.asObservable();

  constructor() { }

  // Get taks from localStorage or initialize empty ones
  private getTasksFromLocalStorage(): ITaks[] {
    if(typeof localStorage !== 'undefined') {
      const storedTasks = localStorage.getItem('task');
      return storedTasks ? JSON.parse(storedTasks) : [];
    }
    
    return [];
  };

  // Save task to localStorage
  private saveTasksToLocalStorage(tasks: ITaks[]): void {
    localStorage.setItem('task', JSON.stringify(tasks))
  };

  // Add task
  addTask(task: ITaks): void {
    const tasks = [...this.tasksSubject.getValue(), task];
    this.tasksSubject.next(tasks);
    this.saveTasksToLocalStorage(tasks);
  };

  // Delete task
  deleteTask(id: number): void {
    const task = this.tasksSubject.getValue().filter(t => t.id !== id);
    this.tasksSubject.next(task);
    this.saveTasksToLocalStorage(task)
  };

  // Toggle completed
  toggleTask(task: ITaks): void {
    const tasks = this.tasksSubject.getValue();
    const index = tasks.findIndex(t => t.id === task.id);

    if(index !== -1) {
      tasks[index].completed = !tasks[index].completed;
      this.tasksSubject.next([...tasks]);
      this.saveTasksToLocalStorage(tasks)
    }
  };

  filterTasks(filter: string): ITaks[] {
    const tasks = this.tasksSubject.getValue();

    if(filter === 'completed') {
      return tasks.filter(t => t.completed);
    } else if (filter === 'pending') {
      return tasks.filter(t => !t.completed)
    }
    
    return tasks

  }
}
