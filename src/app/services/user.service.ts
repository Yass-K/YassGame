import { Injectable } from '@angular/core';
import {User} from '../models';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  login(username: string, password: string): any {
    return this.http.post('https://yassgame.herokuapp.com/api/login_check', {username, password});
  }

  getInfosUser(id: number): any {
    const headers = { Authorization: 'Bearer '  + this.authService.getToken() };
    return this.http.get('https://yassgame.herokuapp.com/api/show/user/' + id, { headers });
  }

  updateUser(id: number, user: User): any {
    const headers = { Authorization: 'Bearer '  + this.authService.getToken() };
    return this.http.patch('https://yassgame.herokuapp.com/api/update/user/' + id, user, { headers });
  }
}
