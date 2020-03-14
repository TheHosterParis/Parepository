import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { equal } from 'assert';

@Component({
  selector: 'app-authent',
  templateUrl: './authent.component.html',
  styleUrls: ['./authent.component.css']
})
export class AuthentComponent implements OnInit {
  users: [];

  // Should the collapsed nav show?
  showNav: boolean;
  showForm = false;
  // Is a user logged in?
  authenticated: boolean;
  // The user
  user: any;


  constructor() { }

 // Used by the Bootstrap navbar-toggler button to hide/show
  // the nav in a collapsed state
  toggleNavBar(): void {
    this.showNav = !this.showNav;
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  signIn(): void {
    this.authenticated = true;
    this.user = {
      displayName: 'Adele Vance',
      email: 'AdeleV@contoso.com'
    };
  }

  signOut(): void {
    // Temporary
    this.authenticated = false;
    this.user = {};
  }

  onSubmit(formData): void {
    const email = 'y.mouenmakoua@gmail.com';
    const mdp = '1789';
    if (formData.email === email && formData.pwd === mdp) {
      alert('Vous êtes désormais connecté : ' + formData.email);
      console.log(formData);
      this.authenticated = true;
    } else {
      alert('mauvais login');
      console.log(formData.email);
      console.log(formData.pwd);
    }
  }

  ngOnInit(): void {
    this.showNav = false;
    this.authenticated = false;
    this.user = {};
  }

}
