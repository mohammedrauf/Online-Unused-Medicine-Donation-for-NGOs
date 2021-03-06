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
     alert(JSON.stringify(data));
    return this.http.post(this.baseURL+"/signup", data);
  }

  signin(data):any  
  {
    // return this.http.post(this.baseURL+"/sign-in", data);
    return this.http.post(this.baseURL+"/signin",data);
  }
  donate(data):any
  {
    return this.http.post(this.baseURL+"/donate",data);
  }

  listdonations():any
  {
    return this.http.get(this.baseURL+'/listdonations');
  }

  processDonation(d):any
  {
    return this.http.post(this.baseURL+'/processDonation',d);
  }
  


}

// donate(data):any
//   {
//     return this.http.post(this.baseURL+"/donate",data);
//   }