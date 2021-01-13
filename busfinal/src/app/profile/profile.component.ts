import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  show:boolean=true;
  user: any;
  ui:User;
 temp:any;
  constructor(private userService:UserService) { 
   this.temp=localStorage.getItem("user-id");
   //this.ui=new User();
  }
  updateCustomerData(){
    this.userService.updateCustomer(this.temp,this.user).subscribe(msg=>alert("updated")
      );
  }
  

  ngOnInit(): void {
    this.userService.ViewProfileDetails(this.temp).subscribe(u=>{this.user=u;console.log(this.user) ;});
    
  }

}
