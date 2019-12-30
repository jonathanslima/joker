import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { SocialComponent } from "./social/social.component";
import { TrailersComponent } from "./trailers/trailers.component";
import { TopoComponent } from "./topo/topo.component";
import { CastingComponent } from "./casting/casting.component";
import { PhrasesComponent } from "./phrases/phrases.component";
import { ContentInfoComponent } from "./content-info/content-info.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SocialComponent,
    TrailersComponent,
    TopoComponent,
    CastingComponent,
    PhrasesComponent,
    ContentInfoComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
