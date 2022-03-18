import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Game} from '../../../models';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games: any;
  gameId: number;
  searchForm: FormGroup;

  constructor(private gameService: GameService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.gameService.getGamesList().subscribe( (data: any) => {
      this.games = data;
      this.gameId = data.id;
      });

    this.searchForm = this.formBuilder.group( {
      reference: ['', Validators.required]
    });
  }

  filterList(id: number): any {
    this.gameService.showGameDetails(this.searchForm.value.reference).subscribe( (data: any) => {
      this.games = Array(data);
    });
  }

  deleteGame(id: number): any {
    this.gameService.deleteGame(id).subscribe(() => {
      location.reload();
    });
  }
}
