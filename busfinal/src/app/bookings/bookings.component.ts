import { Component, OnInit } from '@angular/core';
import { PastBooks } from '../models/pastbook.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  
  user: any;
  temp:any;
 
  constructor(private userService:UserService) { 
      this.temp=localStorage.getItem("user-id");
  }
  
  ngOnInit(): void {
    this.userService.PastBooking(this.temp).subscribe(u=>{this.user=u});  
  }

}
