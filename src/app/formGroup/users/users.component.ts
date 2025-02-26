import { Component, OnInit } from '@angular/core';
import { FormGroupService } from '../form-group.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any = [];

  constructor(
    private userService: FormGroupService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }


  // deleteUser(index: number) {
  //   if (confirm('Are you sure you want to delete this user?')) {
  //     this.users.splice(index, 1);
  //   }
  // }
  deleteUser(index: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(index);
      this.users = this.userService.getUsers(); // Refresh the list
    }
  }
}
