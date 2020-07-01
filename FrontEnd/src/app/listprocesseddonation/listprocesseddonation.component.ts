import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listprocesseddonation',
  templateUrl: './listprocesseddonation.component.html',
  styleUrls: ['./listprocesseddonation.component.css']
})
export class ListprocesseddonationComponent implements OnInit {

  donations;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.listdonations().subscribe((d)=>{


      if(d.status=="ok"){
    
        this.donations = d.data.filter((p)=>{
          return (p.status == 1) && (p.ngoEmail == localStorage.getItem('email'))
        });
        
    
    
    
      }
      else{
        alert("api request failed");
      }
    })
  }

}
