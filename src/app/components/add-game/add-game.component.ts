import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../shared/service/games.service";
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  newGameForm: FormGroup = new FormGroup({});
  gameName: string = "";
  file: any;

  constructor(private gameService : GamesService, public router:Router, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getCreated();
  }

  addGame(name: string, bundle: string, owner: string) {
      let gameUrl: string | SafeUrl = URL.createObjectURL(this.file);
      gameUrl = this.domSanitizer.bypassSecurityTrustUrl(gameUrl as string);
      console.log(gameUrl)
      this.gameService.addGame(name,bundle,owner,gameUrl as SafeUrl);
      this.router.navigateByUrl('/');
  }

  getFile(event: any){
    this.file = event.target.files[0];
    console.log('file',this.file);
  }

  getCreated(){
    this.newGameForm = new FormGroup({
      gameName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      gameBundle: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
      gameOwner: new FormControl('', [Validators.required, Validators.email]),
      gameImage: new FormControl('', [Validators.required])
    });
  }

  get name() { return this.newGameForm.get('gameName'); }
  get bundle() { return this.newGameForm.get('gameBundle'); }
  get owner() { return this.newGameForm.get('gameOwner'); }
  get url() { return this.newGameForm.get('gameOwner'); }
}

