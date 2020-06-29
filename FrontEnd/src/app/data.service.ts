import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  register(data):any
   {
    return this.http.post(this.baseURL+"/signup", data);
  }

  signin():any  
  {
    // return this.http.post(this.baseURL+"/sign-in", data);
    return this.http.get(this.baseURL+"/signup");
  }
}
