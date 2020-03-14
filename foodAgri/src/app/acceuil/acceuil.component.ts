import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  cultures: any;
  // Is a user logged in?
  authenticated: boolean;
  // The user
  user: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.authenticated = false;
    this.user = {};
    this.apiService.getCultures().subscribe((data) => {
      console.log(data);
      this.cultures = data;
    });
  }

  signIn(): void {
    // Temporary
    this.authenticated = true;
    this.user = {
      displayName: 'Adele Vance',
      email: 'AdeleV@contoso.com'
    };
  }

}
