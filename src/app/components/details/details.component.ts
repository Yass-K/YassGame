import { Component, OnInit } from '@angular/core';
import {Game} from '../../models';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  game: Game;

  constructor(private route: ActivatedRoute,
              private gamesService: GameService) { }

  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id'));
    this.gamesService.showGameDetails(+id)
      .subscribe(data => {
        this.game = data;
      });
  }
}
