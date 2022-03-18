import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameService} from '../../../services/game.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {
  selectedFile: File = null;
  gameForm: FormGroup;
  id: any;
  types = [
    'action', 'aventure', 'combat', 'jeu de rôle', 'sport'
  ];
  platforms = [
    'xbox', 'playstation 3', 'playstation 4', 'playstation 5', 'pc', 'switch'
  ];

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService,
              private http: HttpClient,
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
      image: ['', Validators.required],
    });
    this.id = localStorage.getItem('id');
  }

  createGame(): any {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile.name);
    this.gameService.addGame(this.id, this.gameForm.value).subscribe(
      response => {
        this.gameService.addImage(response.id, fd).subscribe((data) => {
          console.log(response.id);
          this.gameForm.reset();
          this.router.navigateByUrl('/profile');
        });
      }
    );
  }

  onFileSelected(event): any {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

}
