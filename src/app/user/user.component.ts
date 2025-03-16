import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[this.getRandomIndex()]);

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  getRandomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  onSelectUser() {
    const randomIndex = this.getRandomIndex();
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
