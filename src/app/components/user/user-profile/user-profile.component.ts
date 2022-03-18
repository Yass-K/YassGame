import { Component, OnInit } from '@angular/core';
import {User} from '../../../models';
import {AuthService} from '../../../services/auth.service';
import {GameService} from '../../../services/game.service';
import {UserService} from '../../../services/user.service';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userInfos: User;
  games: any;
  gameId: number;
  userId: number;

  constructor(private userService: UserService,
              private authService: AuthService,
              private gamesService: GameService) { }

  ngOnInit(): void {
    this.userService.getInfosUser(+this.userId).subscribe( data => {
        this.userInfos = data;
        this.userId = data.id;
        localStorage.setItem('id', data.id);
      }
    );

    this.gamesService.getGamesByUser().subscribe( data => {
      this.games = data;
      console.log(data.length);
    });

    this.gameId = this.games?.id;
  }

  logout(): any {
    this.authService.logout();
  }

  updateGame(): any {
    this.gamesService.updateGame(this.gameId, this.games);
  }

  deleteGame(id: number): any {
    this.gamesService.deleteGame(id).subscribe(() => {
      location.reload();
    });
  }
}
