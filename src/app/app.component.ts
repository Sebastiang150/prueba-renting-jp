import { Component } from '@angular/core';
import { IndexedDBService } from './transversal/indexed-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    readonly indexedDBService: IndexedDBService
  ) {

    this.indexedDBService.createDB();
  }
}
