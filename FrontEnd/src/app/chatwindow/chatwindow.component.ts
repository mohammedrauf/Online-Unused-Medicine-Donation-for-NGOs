import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatwindow',
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.css']
})
export class ChatwindowComponent implements OnInit {

  loggedInUserName;
  loggedInUserEmail;
  constructor() { }

  ngOnInit(): void {
    this.loggedInUserEmail= localStorage.getItem('email')
    this.loggedInUserName= localStorage.getItem('name')
    console.log(this.loggedInUserName);
  
  }

}
