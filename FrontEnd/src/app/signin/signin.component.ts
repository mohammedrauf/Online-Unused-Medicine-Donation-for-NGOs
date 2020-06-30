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
      this.ds.signin()
      .subscribe((response)=>{
       
        if(response.status=="ok")
        {

          response.data.forEach(element => {            
            if(element.email==this.emailProp && element.password==this.passwordProp){
              acFound=true
              console.log(element.email, element.password)
              localStorage.setItem('email', element.email);
              localStorage.setItem('name', element.name);
              this.router.navigate(['/home']); 
              
            }
          }
          
            );
        }
        if(acFound==false) {
          alert("somthing went wrong")
        }
        
      })
     }
  }
}
