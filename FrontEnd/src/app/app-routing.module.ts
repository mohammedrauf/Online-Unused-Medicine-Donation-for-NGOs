import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';


const routes: Routes = [
  {path:'', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'chat-window', component:ChatwindowComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
