import { Component, inject, OnInit } from '@angular/core';
import { User, UserService } from '../services/user-service.service';

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css'],
})
export class TestUserComponent implements OnInit {
  private userService = inject(UserService);

  allUsers: User[] = [];

  ngOnInit(): void {
    this.allUsers = this.userService.getUsers();
    console.log('Initial users:', this.allUsers);
  }

  logUsers() {
    console.log(`Пользователи получены:`, this.allUsers);
  }

  createUser(name: string, email: string) {
    this.userService.createUser(name, email);
    this.allUsers = this.userService.getUsers();
    console.log('Created user');
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.allUsers = this.userService.getUsers();
    console.log('Deleted user');
  }

  updateUser(id: number) {
    this.userService.updateUser(id, { name: 'Boddy' });
    this.allUsers = this.userService.getUsers();
    console.log('Updated user');
  }
}
