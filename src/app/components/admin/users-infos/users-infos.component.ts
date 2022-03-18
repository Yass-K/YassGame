import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {GameService} from '../../../services/game.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Game, User} from '../../../models';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-users-infos',
  templateUrl: './users-infos.component.html',
  styleUrls: ['./users-infos.component.css']
})
export class UsersInfosComponent implements OnInit {
  usersInfos: User;
  usersGames: any;
  gamesNumber: number;
  userId: number;

  constructor(private adminService: AdminService,
              private gamesService: GameService,
              private http: HttpClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id'));
    this.adminService.getUsersInfos(+id).subscribe( data => {
      this.usersInfos = data;
      this.userId = data.id;
    });

    this.adminService.getUsersGames(+id).subscribe( data => {
      this.usersGames = data;
      this.gamesNumber = data.length;
    });
  }

  updateGame(): any {
    this.gamesService.updateGame(this.usersGames.id, this.usersGames);
  }

  deleteGame(id: number): any {
    this.gamesService.deleteGame(id).subscribe(() => {
      location.reload();
    });
  }
}
