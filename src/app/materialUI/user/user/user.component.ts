import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
export class UserComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['sr', 'name', 'email', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>([]);
  userList = ['Admin', 'User', 'Management'];
  search = '';
  roleUser = '';
  startDate: number | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpService: ApiHttpsService) { }

  ngOnInit() {
    this.getUserData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  searchUser() {
    this.getUserData();
  }

  filterRole(role: string) {
    this.roleUser = role;
    this.getUserData();
  }

  filterDate(event: any) {
    this.startDate = event.value ? new Date(event.value).getTime() : null;
    this.getUserData();
  }

  getUserData() {
    const params: any = {
      ...(this.search && { search: this.search }),
      ...(this.roleUser && { role: this.roleUser }),
      ...(this.startDate && { startDate: this.startDate })
    };

    this.httpService.getData(apiUrl.GET_USER, params).subscribe((response: any) => {
      this.dataSource.data = response.data || [];
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteUser(user: User) {
    this.httpService.deleteData(apiUrl.DELETE_USER, { id: user.sr }).subscribe(() => {
      this.getUserData();
    });
  }
}
