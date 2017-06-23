import { Component, OnInit } from '@angular/core';
import { SearchService }     from './search.service';
import { Router }            from '@angular/router';

import '../styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  searchTerm: string;

  constructor(private router: Router) {
    
  }

  search(): void {
    this.router.navigate(['/search', this.searchTerm])
  }
}
