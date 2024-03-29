import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username === 'toto' && password === 'toto') {
      this.isAuthenticated = true;
      this.router.navigate(['/catalogue']);
      return true;
    }
    else if (username === 'emma' && password === 'toto') {
      this.isAuthenticated = true;
      this.router.navigate(['/catalogue']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
