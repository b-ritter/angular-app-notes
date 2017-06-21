import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','../styles.scss']
})

export class AppComponent implements OnInit {

  number_data
  base_url;
  constructor(http: Http) {
    this.base_url = 'https://en.wikipedia.org/wiki/';
    http.get('https://en.wikipedia.org/api/rest_v1/page/related/number')
      .map(res => res.json())
      .subscribe(wiki_data => {
        const data = wiki_data.pages.slice(1,-1);
        const number_info = Object.entries(data).map(([key, value])=>{
          let { 
            'title': link,
            'thumbnail': {
              'source': source
            }={'source': null},
            'extract': description,
            'normalizedtitle': title 
          } = value;
          console.log(source);
          return {
            title,
            link,
            description,
            source
          }
        })
        this.number_data = number_info;
      })
  }

  ngOnInit() {
  }

  link(item) {
    return this.base_url + item.link;
  }

}
