import { EpisodesResolver } from './pages/services/episodes.service';
import { CharactersResolver } from './pages/services/characters.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadChildren: () => import('../app/pages/characters/characters.module').then(m => m.CharactersModule),
    resolve: {
      data : CharactersResolver
    }
  },
  {
    path: 'episodes',
    loadChildren: () => import('../app/pages/episodes/episodes.module').then(m => m.EpisodesModule),
    resolve: {
      data : EpisodesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
