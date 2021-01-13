import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import {BookingService} from '../services/booking.service';
import {Payment} from '../models/payment.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  user:any;
  temp:any;
  total:any;
  balance:number;
  book:Payment;
  constructor(private userservice:UserService,private bookingservice:BookingService) 
  {
    this.temp=localStorage.getItem("user-id");
    this.total=localStorage.getItem("total");
    this.book=new Payment();
    //this.book.booking_id=localStorage.getItem("Book-id");
    //this.book.guest_id=null;
    //this.book.payment_status="success";
    //this.book.user_id=this.temp;
    //this.book.total_price=this.total;
    this.userservice.ViewProfileDetails(this.temp).subscribe(u=>{this.user=u;this.checkbalance();});
  }
  
  checkbalance()
  {
    if(this.user.wallet<this.total)
    {
      (<HTMLInputElement> document.getElementById("pay")).disabled=true;
    }
    this.balance=this.user.wallet-this.total;
  }
  updatewallet()
  {
    this.book.booking_id=localStorage.getItem("Book-id");
    this.book.guest_id=null;
    this.book.payment_status="success";
    this.book.user_id=this.temp;
    this.book.total_price=this.total;
    this.user.wallet=this.balance;
    console.log(this.user.wallet);
    this.userservice.ChangePasswordApi(this.temp,this.user).subscribe(msg=>alert("wallet updated"));
    this.bookingservice.makepayment(this.book).subscribe(x=>console.log(x));

  }
  
  ngOnInit(): void {
  }

}
