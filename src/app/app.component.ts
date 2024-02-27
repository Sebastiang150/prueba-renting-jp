import { Component, DoCheck, OnInit } from '@angular/core';
import { IndexedDBService } from './transversal/indexed-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements DoCheck {
  isPagePrincipal = false;
  constructor(
    readonly indexedDBService: IndexedDBService,
    private router: Router
  ) {

    this.indexedDBService.createDB();
  }
  ngDoCheck(): void {
    this.isPagePrincipal = this.router.url.includes('ingreso') || this.router.url.includes('registro');
  }
}
