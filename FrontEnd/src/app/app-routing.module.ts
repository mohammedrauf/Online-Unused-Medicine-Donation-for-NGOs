import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CausesComponent } from './causes/causes.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ElementsComponent } from './elements/elements.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { DonateComponent } from './donate/donate.component';
import { SigninComponent } from './signin/signin.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'causes',component:CausesComponent},
  {path:'events',component:EventsComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'event-details',component:EventDetailsComponent},
  {path:'elements',component:ElementsComponent},
  {path:'single-blog',component:SingleBlogComponent},
  {path: 'donate',component:DonateComponent},
  {path: 'signin', component:SigninComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
