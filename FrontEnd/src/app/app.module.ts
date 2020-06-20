import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CausesComponent } from './causes/causes.component';
import { FcauseComponent } from './fcause/fcause.component';
import { EventComponent } from './event/event.component';
import { TeamComponent } from './team/team.component';
import { CtaComponent } from './cta/cta.component';
import { StoryComponent } from './story/story.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    CausesComponent,
    FcauseComponent,
    EventComponent,
    TeamComponent,
    CtaComponent,
    StoryComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
