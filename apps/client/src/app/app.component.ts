import { Component, OnInit } from '@angular/core';
import { AuthService } from '@products/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'products-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated = this.authService.isAuthenticated;

  links = [
    { path: '/products', icon: 'local_grocery_store', title: 'Products' },
    { path: '/categories', icon: 'layers', title: 'Categories' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
    if(localStorage.getItem('user_Token')) {
      this.authService.setToken(true);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
