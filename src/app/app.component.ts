import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-app-assignment';
  public navbarCollapsed = true;

  constructor (private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
