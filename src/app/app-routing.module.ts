import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/layouts/main-layout/main-layout.component";
import {GameListComponent} from "./components/game-list/game-list.component";
import {AddGameComponent} from "./components/add-game/add-game.component";

const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children:[
      {
        path:'',
        component: GameListComponent
      },
      {
        path:'new-game',
        component: AddGameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
