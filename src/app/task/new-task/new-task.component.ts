import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTask } from './new-task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input ({required: true }) userId!: string;
    @Output() close = new EventEmitter<void>();
    enteredTitle = '';
    enteredSummary = '';
    enteredDueDate =  '';

    private tasksService = inject(TaskService)

  cancelDialog() {
    this.close.emit();
  }

  onsubmit() {
    this.tasksService.AddTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate}, this.userId);

  this.close.emit();
  } 
}
