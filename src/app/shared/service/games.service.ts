import { Injectable } from '@angular/core';
import {GamesModel} from "../model/games.model";
import {SafeUrl} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  gameList: GamesModel[] = [];
  constructor() { }

  getGameList(){
    return this.gameList;
  }

  addGame(name:string, bundle:string, owner:string, imgUrl: SafeUrl){
    this.gameList.push({id: this.gameList.length, name: name, bundle:bundle, owner: owner, imgUrl:imgUrl})
  }

  deleteGame(id:number){
    this.gameList = this.gameList.filter(x => x.id !== id);
  }
}
