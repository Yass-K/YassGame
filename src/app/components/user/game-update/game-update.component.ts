import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Game} from '../../../models';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../../../services/game.service';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.css']
})
export class GameUpdateComponent implements OnInit {
  gameForm: FormGroup;
  game: Game;
  id: string;
  types = [
    'action', 'aventure', 'combat', 'jeu de rôle', 'sport'
  ];
  platforms = [
    'xbox', 'playstation 3', 'playstation 4', 'playstation 5', 'pc', 'switch'
  ];
  constructor(private formBuilder: FormBuilder,
              private gamesService: GameService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      platform: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required],
      editor: ['', Validators.required],
      type: ['', Validators.required],
      releasedDate: ['', Validators.required],
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.showDetails();
  }

  showDetails(): any  {
    this.gamesService.showGameDetails(+this.id).subscribe( data => {
      this.game = data;
      console.log(data.name);
    });
  }

  updateGame(): any {
    this.gamesService.updateGame(+this.id, this.gameForm.value).subscribe( data => {
    console.log(data);
    // this.gameForm.reset();
    this.router.navigateByUrl('/profile');
    });
  }
}
