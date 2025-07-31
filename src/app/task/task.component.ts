import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from './new-task/new-task.component';

// standalone component for task management
// it takes userId and name as inputs and emits the selected tasks for that user
// it uses the TasksComponent to display the tasks for the selected user
// the tasks are filtered based on the userId input
// the component is standalone and can be used independently in other parts of the application
// it imports the TasksComponent to display the tasks for the selected user
// the component is styled using the task.component.css file
// the component is used in the app.component.html file to display the tasks for the selected user
@Component({
  selector: 'app-task', 
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [TasksComponent, NewTaskComponent]
})
export class TaskComponent {
  // Inputs for userId and name, both requiredS
  // conventionally we can create a custom type for user details instead of using string and passing users information one by one
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddngTask: boolean = false;
  // Output for task selection, passing the tasks to the tasks component
  tasks = dummyTasks;
  // Output event emitter for task selection
  get selectedUserTask() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    // Handle the completion of a task by filtering out the completed task
    this.tasks = this.tasks.filter(task => task.id !== id);
   }

   onAddTask() {
    this.isAddngTask = true;
   }
   onRemoveDialog() {
    this.isAddngTask = false;
  }
}
