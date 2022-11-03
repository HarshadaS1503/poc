import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
  
  
  lstrole:string[]=['admin','doctor'];

  constructor(private http:HttpClient) 
  {

  }

  getRoles()
  {
     return this.http.get("http://localhost:45374/api/Users");
    //return this.lstrole;
  }
}
