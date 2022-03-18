import { Component, OnInit } from '@angular/core';
import {LabelType, Options} from '@angular-slider/ngx-slider';
import {Game} from '../../models';
import {HttpClient} from '@angular/common/http';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;
  totalGames: number;
  games: any;
  minValue = 0;
  maxValue = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
        case LabelType.High:
        default:
          return '€' + value;
      }
    }
  };

  type = '';
  platform = '';
  typeName = 'Genre';
  types = [
    'Action', 'Aventure', 'Combat', 'Jeu de rôle', 'Sport'
  ];

  platformName = 'Plateforme';
  platforms = [
    'Xbox', 'Playstation 3', 'Playstation 4', 'Playstation 5', 'Pc', 'Game boy'
  ];

  constructor(private http: HttpClient,
              private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGamesList().subscribe(
      (data: any) => {
        this.games = data;
        this.totalGames = data.length;
      });
  }

  changeType(type: string): void {
    this.typeName = type;
    console.log(type);
  }

  changePlateform(platform: string): void {
    this.platformName = platform;
  }

  filterGames(): any {
    return this.http.post('https://yassgame.herokuapp.com/filter/games', {
      type: this.typeName,
      platform: this.platformName
    }).subscribe( data => {
      this.games = data;
    });
  }


}
