import { Component } from '@angular/core';
import { IndexedDBService } from '../../../transversal/indexed-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-selector',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(
    private router: Router
  ) { }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
