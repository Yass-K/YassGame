import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {User} from '../models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getInfosUsers(): any {
    const headers = { Authorization: 'Bearer '  + this.authService.getToken() };
    return this.http.get('https://yassgame.herokuapp.com/api/users', { headers });
  }

  register(user: User): any {
    const headers = { Authorization: 'Bearer '  + this.authService.getToken() };
    return this.http.post('https://yassgame.herokuapp.com/api/register', user, { headers });
  }

  deleteUser(id: number): any {
    const headers = { Authorization: 'Bearer '  + this.authService.getToken() };
    return this.http.delete('https://yassgame.herokuapp.com/api/delete/user/' + id, { headers });
  }

  getUsersInfos(id: number): any {
    const headers = { Authorization: 'Bearer '  + this.authService.getToken() };
    return this.http.get('https://yassgame.herokuapp.com/api/show/user/' + id, { headers });
  }

  getUsersGames(id: number): any {
    const headers = { Authorization: 'Bearer '  + this.authService.getToken() };
    return this.http.get('https://yassgame.herokuapp.com/api/games/count/user/' + id, { headers });
  }


}
