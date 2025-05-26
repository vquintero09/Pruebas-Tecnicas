import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent {

  @Output() taskFilter = new EventEmitter();
  selectedFilter: string = 'all';

  selectFilter(filter: string) {
    this.taskFilter.emit(filter);
    this.selectedFilter = filter;
    console.log(this.selectedFilter);
    
  }
}
