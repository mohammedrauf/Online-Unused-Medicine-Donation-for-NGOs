import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  dfnameProp="";
  dlnameProp="";
  demailProp="";
  dmedicineProp="";
  daddProp="";
  dareaProp="";
  dphoneProp="";
  deleiveryoptionProp=""

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  donate(){
    alert(this.deleiveryoptionProp);
    if(this.dfnameProp!="" && this.demailProp!="" && this.dlnameProp!="" && this.dphoneProp!="" && this.daddProp!="" && this.dareaProp!="" && this.dmedicineProp!="" ){
      this.ds.donate({firstname:this.dfnameProp, email:this.demailProp, lastname:this.dlnameProp, mobile:this.dphoneProp, address:this.daddProp, area:this.dareaProp, medecine:this.dmedicineProp, deliveryOption:this.deleiveryoptionProp, status:0, ngoEmail:""})
      .subscribe((response)=>{
  
        alert(JSON.stringify(response));
  
        if(response.status=="ok")
        {
            alert("donation successful ")
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
  