import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { element } from 'protractor';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  acFound=false;
  emailProp="";
  passwordProp="";  
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }
  signin()
  { var acFound=false;
     
     if(this.emailProp !="" && this.passwordProp!=""){
      // {email:this.emailProp, password:this.passwordProp}
      this.ds.signin({email:this.emailProp, password:this.passwordProp})
      .subscribe((response)=>{
       
        if(response.status=="ok")
        {
              localStorage.setItem('email', response.data[0].email);
              localStorage.setItem('name',  response.data[0].name);
              this.router.navigate(['/dashboard/listdonations']); 
              
     
        
        }
        else{
          alert("somthing went wrong")
        }
        
      })
     }
  }
}
