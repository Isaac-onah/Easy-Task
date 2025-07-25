import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required:true}) id!: string;
  @Input({required:true}) avatar!: string ;
  @Input({required:true}) name!: string ;

  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/'+ this.avatar;}


  onSlectUser() {
    this.selectUser.emit(this.id)
  }
}
