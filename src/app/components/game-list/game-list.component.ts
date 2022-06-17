import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../shared/service/games.service";
import {GamesModel} from "../../shared/model/games.model";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GamesModel[] = [];
  game: GamesModel | null=null;

  constructor(private gameService : GamesService) { }

  ngOnInit(): void {
   this.getData();
  }

  getData(){
    this.gameList = this.gameService.getGameList();
  }

  deleteGame(id: number) {
    this.gameService.deleteGame(id);
    this.getData();
  }
}
