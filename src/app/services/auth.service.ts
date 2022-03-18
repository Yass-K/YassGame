import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;
  userId: number;

  constructor(private http: HttpClient,
              private router: Router) { }

  setToken(data: any): any {
    localStorage.setItem('token', data);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  checkRoles(data: any): any {
    if (data.length === 2) {
      localStorage.setItem('admin', 'true');
    } else {
      localStorage.setItem('user', 'true');
    }
  }

  isAnAdmin(): any {
    if (localStorage.getItem('admin') === 'true') {
      this.isAdmin = true;
      return true;
    }
    this.isAdmin = false;
    return false;
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

  isConnected(): any {
    localStorage.setItem('loggedIn', 'true');
  }

  logout(): any {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
