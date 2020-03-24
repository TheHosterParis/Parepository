import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Should the collapsed nav show?
  showNav: boolean;
  showForm: boolean;
  // Is a user logged in?
  authenticated: boolean;
  // The user
  user: any;

  constructor() { }

  ngOnInit() {
    this.showNav = false;
    this.showForm = false;
    this.authenticated = false;
    this.user = {};
  }

  // Used by the Bootstrap navbar-toggler button to hide/show
  // the nav in a collapsed state
  toggleNavBar(): void {
    this.showNav = !this.showNav;
  }
  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  signIn(email, password): void {
    // Temporary
    this.authenticated = true;
    this.user = {
      email,
      password
    };
  }

  onSubmit(formData): void {
    this.authenticated = true;
  }

  onSubmit2(formData): void {
    const email = 'y.mouenmakoua@gmail.com';
    const mdp = '1789';
    if (formData.email === email && formData.pwd === mdp) {
      alert('Vous êtes désormais connecté : ' + formData.email);
      console.log(formData);
      this.signIn(formData.email, formData.pwd);
    } else {
      alert('mauvais login');
      console.log(formData.email);
      console.log(formData.pwd);
    }
  }

  signOut(): void {
    // Temporary
    this.authenticated = false;
    this.user = {};
  }
}
