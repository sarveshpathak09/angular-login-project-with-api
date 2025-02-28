import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface User {
  sr: number;
  name: string;
  email: string;
  role: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['sr', 'name', 'email', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>([
    { sr: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { sr: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { sr: 3, name: 'Sam Wilson', email: 'sam@example.com', role: 'Manager' },
    { sr: 4, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { sr: 5, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { sr: 6, name: 'Sam Wilson', email: 'sam@example.com', role: 'Manager' },
  ]);

  userList = ['Admin', 'User', 'Manager'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(user: User) {
    console.log('Delete User', user);
  }

}
