import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user:any;
  temp:any;
  // user_id:number=6;
  // userpass:number=1234;
  constructor(private userService:UserService) {
    this.temp=localStorage.getItem("user-id");
    this.userService.ViewProfileDetails(this.temp).subscribe(u=>{this.user=u});
  }

  ChangePassword(){
    this.userService.ChangePasswordApi(this.temp,this.user).subscribe(msg=>alert("pwd updated"));
    
  }
  
  ngOnInit(): void {
  }

}
