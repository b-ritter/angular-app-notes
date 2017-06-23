import { Component, OnInit } from '@angular/core';
import { SearchService }            from '../search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [SearchService]
})
export class ResultsComponent implements OnInit{
  results
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private location: Location
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchService.search(params['term'])
      .subscribe(results => this.results = results);
    })
  }

}
