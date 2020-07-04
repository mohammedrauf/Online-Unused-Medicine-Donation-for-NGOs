import { Component, OnInit, ApplicationRef } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  nameProp="";
  emailProp="";
  passwordProp="";
  addressProp="";
  areaProp="";
  mobileNoProp="";
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
   
  }

  register()
  { var acFound=false;
    if(this.nameProp!="" && this.emailProp!="" && this.passwordProp!="" && this.mobileNoProp!="" && this.addressProp!="" && this.areaProp!="" ){
    this.ds.register({name:this.nameProp, email:this.emailProp, password:this.passwordProp, mobile:this.mobileNoProp, address:this.addressProp, area:this.areaProp})
    .subscribe((response)=>{

      alert(JSON.stringify(response));

      if(response.status=="ok")
      {
          alert("registration successfull ")
          this.router.navigate(['/signin']); 
      }
      else{
        alert(response.data);
      }
     
       
      })
  }
  else{
    alert("fill all filds!")
  }
  
}
}


// if(this.nameProp!="" && this.emailProp!="" && this.passwordProp!="" && this.mobileNoProp!="" && this.addressProp!="" && this.areaProp!="" )
// this.ds.signup({name:this.nameProp, email:this.emailProp, password:this.passwordProp ,phone:this.mobileNoProp , address:this.addressProp ,area:this.areaProp}

// nameProp="";
//   emailProp="";
//   passwordProp="";
//   addressProp="";
//   areaProp="";
//   mobileNoProp="";