import { Component, EventEmitter, Input, Output } from '@angular/core';
import {type Task} from './task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
//accept task object as input to be displayed in the taskdetails component
export class TasksComponent {
  // Input(decorator) property to receive a task object
  // The 'required' flag ensures that this input must be provided
  @Input({required: true}) userTask!: Task;
  @Output() completed = new EventEmitter<string>();

  onCompleteTask() {
    // Emit the task ID when the task is marked as completed
    this.completed.emit(this.userTask.id);
  } 
}
