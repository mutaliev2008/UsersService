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
    this.allUsers = this.getUser();
    console.log('Initial users:', this.allUsers);
  }

  getUser(): any[] {
    return this.userService.getUsers();
  }

  logUsers() {
    console.log(`Пользователи получены:`, this.allUsers);
  }

  createUser(name: string, email: string) {
    this.userService.createUser(name, email);
    this.loadUsers();
    console.log('Created user');
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.loadUsers();
    console.log('Deleted user');
  }

  loadUsers(): void {
    this.allUsers = this.userService.getUsers();
    console.log('Initial users:', this.allUsers);
  }

  updateUser(id: number) {
    this.userService.updateUser(id, { name: 'Boddy' });
    this.loadUsers();
    console.log('Updated user');
  }
}
