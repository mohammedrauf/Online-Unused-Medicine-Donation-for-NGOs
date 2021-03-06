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
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListdonationsComponent } from './listdonations/listdonations.component';
import { WebsiteComponent } from './website/website.component';
import { ListprocesseddonationComponent } from './listprocesseddonation/listprocesseddonation.component';
import { InstructiondashboardComponent } from './instructiondashboard/instructiondashboard.component';



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
    SignupComponent,
    DashboardComponent,
    ListdonationsComponent,
    WebsiteComponent,
    ListprocesseddonationComponent,
    InstructiondashboardComponent
       
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
