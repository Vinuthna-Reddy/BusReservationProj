import { Component, OnInit } from '@angular/core';
import {BookingService} from "../services/booking.service";
import {Payment} from "../models/payment.model";
import {Booking} from "../models/booking.model";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit 
{
  busdetails:any;
  book:Payment;
  temp:any;
  constructor(private bookingservice:BookingService) 
  {
    //this.user=new User();
    this.book=new Payment();
    this.temp=localStorage.getItem("user-id");
    this.book.booking_id=localStorage.getItem("Book-id");
    this.book.guest_id=null;
    this.book.payment_status="success";
    this.book.user_id=this.temp;
    this.book.total_price=this.total;

  }
  Payment()
  {
    alert('Payment Successful!');
    this.bookingservice.makepayment(this.book).subscribe(x=>console.log(x));
  }  
  ngOnInit(): void {
  }

}
