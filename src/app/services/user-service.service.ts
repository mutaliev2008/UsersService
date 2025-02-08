import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Lizda Doe',
      email: 'lizda.doe@',
    },
    {
      id: 3,
      name: 'David Doe',
      email: 'david@example.com',
    },
  ];

  getUsers(): User[] {
    return this.users.slice();
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
  nextId = this.users.length + 1;
  createUser(name: string, email: string) {
    const newUser: User = {
      id: this.nextId,
      name,
      email,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, userData: Partial<User>) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...userData };
      console.log(`Пользователь с id ${id} обновлен.`);
    } else {
      console.log('Пользователь не найден');
    }
  }

  deleteUser(id: number): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
    }
  }
}
