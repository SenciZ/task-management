import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

type UserData = {
  avatar: string;
  name: string;
  id: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: UserData;
  // @Input({ required: true }) avatar!: string; //Syntax to use traditional (zone.js) state management using the decorator
  // @Input({ required: true }) name!: string; //Syntax to use traditional (zone.js) state management using the decorator
  // @Input({ required: true }) id!: string; //Syntax to use traditional (zone.js) state management using the decorator
  // name = input.required<string>(); //Syntax to use Signals for state management
  // avatar = input.required<string>(); //Syntax to use Signals for state management

  // selectUserEvent = output<string>() // Syntax to use newer way for handling an event

  @Output() selectUserEvent = new EventEmitter<string>(); // Syntax to use traditional way of handling events

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUserEvent.emit(this.user.id);
  }
}
