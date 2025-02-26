import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'angularApp';
  showNavbar = true;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.showNavbar = this.router.url !== '/login';
    });
  }
}
