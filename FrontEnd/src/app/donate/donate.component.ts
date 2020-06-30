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

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  donate(){
    if(this.dfnameProp!="" && this.demailProp!="" && this.dlnameProp!="" && this.dphoneProp!="" && this.daddProp!="" && this.dareaProp!="" && this.dmedicineProp!="" ){
      this.ds.donate({name:this.dfnameProp, email:this.demailProp, password:this.dlnameProp, mobile:this.dphoneProp, address:this.daddProp, area:this.dareaProp, medecine:this.dmedicineProp})
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
  