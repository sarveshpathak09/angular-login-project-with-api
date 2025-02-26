import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService {

  public users = [
    { id: 0, name: 'John Doe', email: 'john@example.com' },
    { id: 1, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  constructor() { }


  // Get users list
  getUsers() {
    console.log("🚀 ~ FormGroupService ~ getUsers ~ this.users:", this.users)
    return this.users;
  }

  // Add a new user
  addUser(user: { id: number, name: string; email: string }) {
    this.users.push(user);
  }


  // Get a single user by index
  getUser(index: number) {
    return this.users[index];
  }

  // Update user
  updateUser(index: number, user: { id: number, name: string; email: string }) {
    this.users[index] = user;
  }

  // Delete user
  deleteUser(index: number) {
    // this.users.splice(index, 1);
    this.users = this.users.filter(user => user.id !== index);
  }



}
