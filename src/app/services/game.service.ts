import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Game} from '../models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  addGame(id: number, game: Game): any {
    const headers = {Authorization: 'Bearer ' + this.authService.getToken()};
    return this.http.post('https://yassgame.herokuapp.com/api/create/game/' + id , game, { headers });
  }

  addImage(id: number, body): any {
    const headers = {Authorization: 'Bearer ' + this.authService.getToken()};
    return this.http.post('https://yassgame.herokuapp.com/api/image/' + id, body, { headers });
  }

  getGamesList(): any {
    return this.http.get('https://yassgame.herokuapp.com/');
  }

  showGameDetails(id: number): any {
    return this.http.get('https://yassgame.herokuapp.com/show/game/' + id);
  }

  getGamesByUser(): any {
    const headers = {Authorization: 'Bearer ' + this.authService.getToken()};
    return this.http.get('https://yassgame.herokuapp.com/api/games/user', { headers });
  }

  updateGame(id: number, game: Game): any {
    const headers = {Authorization: 'Bearer ' + this.authService.getToken()};
    return this.http.patch('https://yassgame.herokuapp.com/api/update/game/' + id, game, { headers });
  }

  deleteGame(id: number): any {
    const headers = {Authorization: 'Bearer ' + this.authService.getToken()};
    return this.http.delete('https://yassgame.herokuapp.com/api/delete/game/' + id, { headers });
  }
}
