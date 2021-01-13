import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../services/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
}) 
export class SignupComponent implements OnInit {
  
  user:User;
  registerForm: FormGroup;
  submitted = false;

  constructor(private userService:UserService,private formBuilder: FormBuilder) 
  {
    this.user=new User();
  }
  InsertUser()
   {
     this.userService.SignupUsingApi(this.user).subscribe(data=>console.log(data));
   }
  ngOnInit(): void {
  //   this.registerForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phno: ['', Validators.required,Validators.minLength(10),Validators.min(6000000000),Validators.max(10000000000)],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required]
  // }//, {
  //  //   validator: MustMatch('password', 'confirmPassword')
  // );
  }
  // get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("yes");
        return;
    }
    else{
      this.InsertUser();
      alert('Registration Successful!');
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
      
}

}
