import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listdonations',
  templateUrl: './listdonations.component.html',
  styleUrls: ['./listdonations.component.css']
})
export class ListdonationsComponent implements OnInit {

  donations;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

this.ds.listdonations().subscribe((d)=>{


  if(d.status=="ok"){

    this.donations = d.data.filter((p)=>{
      return p.status == 0;
    });
    



  }
  else{
    alert("api request failed");
  }
})

  }


  processThisRequest(d)
  {
    alert(JSON.stringify(d));
    alert(localStorage.getItem('email'));

        this.ds.processDonation({id:d._id, ngoEmail:localStorage.getItem('email')}).subscribe((d)=>{
          if(d.status=="ok")
          {


                      
this.ds.listdonations().subscribe((d)=>{


  if(d.status=="ok"){

    this.donations = d.data.filter((p)=>{
      return p.status == 0;
    });
    
  }
  else{
    alert("api request failed");
  }
})




          }
        });

  }





}
