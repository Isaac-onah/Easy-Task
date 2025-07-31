import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import {type User } from './user.model';


// Define the UserComponent to display user information
// It uses the @Component decorator to specify metadata such as selector, template, and styles
// The component accepts a user object as input and emits an event when the user is selected
// The imagePath computed property constructs the path to the user's avatar image
// The onSlectUser method emits the user's id when the user is selected
// The component is standalone, meaning it can be used independently without being part of a module
// The @Input decorator is used to define the input property 'user' which is required
// The @Output decorator is used to define the output event 'selectUser' which emits the user's id
// The component's template and styles are defined in separate files (user.component.html and
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//accepts a user object as input to be displayed in the user component
// emits an event when the user is selected
// The 'required' flag ensures that this input must be provided
// The imagePath computed property constructs the path to the user's avatar image
// The onSlectUser method emits the user's id when the user is selected 
export class UserComponent {

  @Input({required: true}) user!: User;
@Input({required: true}) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/'+ this.user.avatar;}


  onSelectUser() {
    this.selectUser.emit(this.user.id)
  }
}
