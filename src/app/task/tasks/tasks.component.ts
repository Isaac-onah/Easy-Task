import { Component, inject, Input} from '@angular/core';
import { DatePipe } from '@angular/common';
import {type Task} from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
//accept task object as input to be displayed in the taskdetails component
export class TasksComponent {
  // Input(decorator) property to receive a task object
  // The 'required' flag ensures that this input    must be provided
  @Input({required: true}) userTask!: Task;

  private tasksService = inject(TaskService)

  onCompleteTask() {
    // Emit the task ID when the task is marked as completed
    this.tasksService.onremoveTask(this.userTask.id);
  } 
}
