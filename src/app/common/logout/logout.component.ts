import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) {
    this.logout();
  }
  ngOnInit(): void {

  }

  logout() {
    localStorage.removeItem('accessToken'); // Clear authentication token
    this.router.navigate(['/login']); // Redirect to login page
  }
}
