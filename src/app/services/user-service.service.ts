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
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
  createUser(name: string, email: string) {
    const nextId = this.users.length + 1;

    const newUser: User = {
      id: nextId,
      name,
      email,
    };
    this.users = [...this.users, newUser];
    console.log(newUser, this.users);

    return newUser;
  }

  updateUser(id: number, userData: Partial<User>) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...userData } : user
    );
    console.log(`Пользователь с id ${id} обновлен.`, this.users);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => {
      return user.id !== id;
    });
    console.log(`Пользователь с id ${id} удален.`, this.users);

    // const userIndex = this.users.findIndex((user) => user.id === id);
    // if (userIndex > -1) {
    //   this.users.splice(userIndex, 1);
    // }
  }
}
