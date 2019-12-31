import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentInfoComponent } from './content-info/content-info.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: 'home', component: ContentInfoComponent },
  { path: 'synopsis', component: SynopsisComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '', redirectTo: '/home',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
