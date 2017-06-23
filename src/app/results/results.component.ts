import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [SearchService]
})
export class ResultsComponent implements OnInit{
  results: object;
  constructor(private searchService: SearchService) {
    this.results;
  }

  ngOnInit() {
    this.searchService.search('imaginary')
    .then(results => {
      this.results = results;
    });
  }
}
