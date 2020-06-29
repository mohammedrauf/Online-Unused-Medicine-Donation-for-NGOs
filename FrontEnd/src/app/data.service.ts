import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class DataService { 
  

  
  baseURL = "http://localhost:4000";

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

// signup(any: { name: string; email: string; password: string; phone: string; address: string; area: string;  }) {
//   throw new Error("Method not implemented.");
// }
