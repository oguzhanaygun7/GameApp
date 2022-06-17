import {SafeUrl} from "@angular/platform-browser";

export class GamesModel {
  id: number;
  name: string;
  bundle: string;
  owner: string;
  imgUrl: SafeUrl;

  constructor() {
    this.id = 0;
    this.name = "";
    this.bundle = "";
    this.owner = "";
    this.imgUrl = "";
  }
}
