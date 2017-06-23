import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import '../styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SearchService]
})

export class AppComponent implements OnInit {
  searchTerm: string;

  constructor(private searchService: SearchService) {
    this.searchTerm
  }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.searchTerm);
  }
}
