import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { SocialComponent } from "./social/social.component";
import { TopoComponent } from "./topo/topo.component";
import { CastingComponent } from "./casting/casting.component";
import { PhrasesComponent } from "./phrases/phrases.component";
import { ContentInfoComponent } from "./content-info/content-info.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CriticsComponent } from './critics/critics.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { CharactersComponent } from './characters/characters.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SocialComponent,
    TopoComponent,
    CastingComponent,
    PhrasesComponent,
    ContentInfoComponent,
    CriticsComponent,
    SynopsisComponent,
    CharactersComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
