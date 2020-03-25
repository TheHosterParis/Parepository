import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Repos } from '../repos';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  userName = 'tektutorialshub';
  repos = [];
  loading = false;
  errorMessage;

  restItems: any;
  restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  constructor(private http: HttpClient, private apiService: ApiService ) {}

  ngOnInit() {
    this.getRestItems();
  }

// repos exemple//
public getRepos() {
  this.loading = true;
  this.errorMessage = '';
  this.apiService.getRepos(this.userName)
    .subscribe(
      (response) => {                           //next() callback
        console.log('response received');
        this.repos = response;
      },
      (error) => {                              //error() callback
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   //complete() callback
        console.error('Request completed');     //This is actually not needed
        this.loading = false;
      });
}

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      );
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}
