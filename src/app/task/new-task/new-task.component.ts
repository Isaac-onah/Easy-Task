import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    @Output() cancel = new EventEmitter<void>();
    @Output() add = new EventEmitter<newTask>();
    enteredTitle = '';
    enteredSummary = '';
    enteredDueDate =  '';


  cancelDialog() {
    this.cancel.emit();
  }

  onsubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
    this.cancelDialog();
  }
}
