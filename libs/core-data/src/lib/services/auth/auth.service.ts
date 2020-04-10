import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = new BehaviorSubject(false);

  setToken(boolean) {
    localStorage.setItem('user_Token', boolean);
    this.isAuthenticated.next(boolean);
  }

  getToken() {
    return localStorage.getItem('user_Token');
  }

  logout() {
    this.setToken('')
  }
}
