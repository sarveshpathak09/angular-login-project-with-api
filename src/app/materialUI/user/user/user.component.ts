import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiHttpsService } from 'src/app/services/api-https.service';
import { apiUrl } from 'src/app/baseapi/apiURl';

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
  dataSource = new MatTableDataSource<User>([]);

  userList = ['Admin', 'User', 'Manager'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private httpService: ApiHttpsService
  ) { }

  ngOnInit() {
    this.getUserData();
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

  getUserData = (): void => {
    this.httpService.getData(apiUrl.GET_USER).subscribe((response: any) => {
      this.dataSource = new MatTableDataSource<User>(response.data);
      this.dataSource.paginator = this.paginator
    });
  }

  deleteUser = (user: any): void => {
    const postData = {
      id: user._id
    };
    this.httpService.deleteData(apiUrl.DELETE_USER, postData).subscribe((response: any) => {
      this.getUserData();
    });
  }

}
