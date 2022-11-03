import { Component, OnInit } from '@angular/core';
import { RoleserviceService } from '../roleservice.service';
import { Roles } from './Roles';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers:[RoleserviceService]
})
export class RoleComponent implements OnInit {

  roles:Roles[];
  constructor(private rs:RoleserviceService) {
   
   }

  ngOnInit(): void {
    
    this.rs.getRoles().subscribe((data)=>
    {
      this.roles=data as Roles[];
      ;
      console.log(data);
    //  this.roles=JSON.stringify(data);
    });
  }

}
