import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskDisplayComponent } from './task-display/task-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, UserComponent, TaskDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-manager';
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  selectUserEvent(id: string) {
    this.selectedUserId = id;
  }
}
