import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from '../models/user.model';
//import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin:User;
  user:any;
  msg:any;
  user_id: any;

  constructor(private userService:UserService) {
    this.userLogin=new User();
    
   }

   onLogin(){
     this.userService.LoginCheckUsingApi(this.userLogin).subscribe(u=>{this.user=u;localStorage.setItem("user-id",this.user)} 
       ,err=>{this.msg=err.error.Message;this.user=undefined}
       );       
   }
  ngOnInit(): void {   
  }

}
