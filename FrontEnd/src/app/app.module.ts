import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CausesComponent } from './causes/causes.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ElementsComponent } from './elements/elements.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DonateComponent } from './donate/donate.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CausesComponent,
    EventsComponent,
    BlogComponent,
    ContactComponent,
    EventDetailsComponent,
    ElementsComponent,
    SingleBlogComponent,
    HeaderComponent,
    FooterComponent,
    DonateComponent,
    SigninComponent,
    
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
