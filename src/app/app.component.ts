import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clase2';
  constructor(private router: Router) { }

  gotoUsers() {
    this.router.navigate(['users', 1], { queryParams: { name: 'Leandro' } });
  }
}
