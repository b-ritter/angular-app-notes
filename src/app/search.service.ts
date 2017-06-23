import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  baseUrl: string = 'https://en.wikipedia.org/api/rest_v1/page/related/';

  constructor(private http: Http) { }

  search(term: string): Promise<object> {
    return this.http
        .get(this.baseUrl + term)
        .toPromise()
        .then(res => {
          const wiki_data = res.json();
          return Object.entries(wiki_data.pages).map(
            ([key, value])=>{
              let { 
                'title': link,
                'thumbnail': {
                  'source': source
                }={'source': null},
                'extract': description,
                'normalizedtitle': title 
              } = value;

              return {
                title,
                link,
                description,
                source
              }
          });
        });
  }
}