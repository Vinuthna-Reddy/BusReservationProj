import { Component, OnInit } from '@angular/core';
import {Seat} from '../models/seats.model';
import {SeatService} from '../services/seats.service';
import {BookingService} from '../services/booking.service';
import {Booking} from '../models/booking.model';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  seat:Seat;
  s:any;
  book:Booking;
  showSeatList:Seat[]=[];
  fillupSeat:number[]=[];
  busdetails:any;
  u_id:any;
  total:number;
  bookid:number;
  constructor(private seatservice:SeatService,private bookingservice:BookingService) 
  { 
    this.busdetails=JSON.parse(localStorage.getItem("BusDetails"));
    this.u_id=localStorage.getItem("user-id");
    this.seat=new Seat();
    this.seat.Bus_ID=this.busdetails.Bus_ID;
    this.seat.seat_status="booked";
    this.book=new Booking();
    this.book.Travel_id=this.busdetails.Travel_ID;
    this.book.user_id=this.u_id;
    this.book.Guest_id=null;
    this.book.coach_bus_id=null;
    this.book.booking_status="pending";
    this.book.bus_id=this.busdetails.Bus_ID;
    this.total=0;
  }
  
  Bookedseats()
  {
    this.seatservice.GetBookedseats(this.seat).subscribe(
      u=>{this.s=u;console.log(this.s);this.showbookedseats();}); 
      console.log(this.busdetails.Bus_ID);
      //this.bookingservice.GetBooking().subscribe(z=>{console.log(z)});
      
      
     // console.log(this.s);
      //this.findseat();
      //this.arr=this.s;
  }
  showbookedseats()
  {
    this.bookingservice.pendingpayment(this.book).subscribe(x=>{console.log(x);this.bookid=x});
    this.s.forEach(element =>
    {
      this.changeSeatColor(element);
      (<HTMLInputElement> document.getElementById(element)).disabled=true;
    });

  }
  selectedseat(e:any) 
  {
    
    console.log(this.s);
    let seats=[];
    seats= this.showSeatList.map(item=>{
      return item.Seat_no;console.log(item.Seat_no);
    })
    let id:any;
     id = document.getElementById(e);
   
     if(1)
     {
         id.innerHTML = `<img src="../assets/img/fseat.png" alt="">`
         var name=prompt("Enter passenger name: ");
         let st=
         {
           Seat_no:e,
           Bus_ID:this.busdetails.Bus_ID,
           booking_id:this.bookid,
           seat_status:"booked",
           passenger_name:name,
           fare:this.busdetails.Cost_Per_Seat
         }
         this.showList(st);
         this.totalfare(st.fare);
         this.fillupSeat.push(st.Seat_no);
      }
  }
  showList(st:any){
    this.showSeatList.push(st);
    console.log(st);
  }
  confirm()
  {
    console.log(this.bookid);
    localStorage.setItem("Book-id",JSON.stringify(this.bookid));
    this.showSeatList.forEach(element => 
    {
      //console.log(element.Seat_no);
      this.seat.Seat_no=element.Seat_no;
      this.seat.Bus_ID=element.Bus_ID;
      this.seat.booking_id=element.booking_id;
      this.seat.seat_status=element.seat_status;
      this.seat.passenger_name=element.passenger_name;
      localStorage.setItem("seats",this.fillupSeat);
      localStorage.setItem("total",this.total);
      //console.log(this.seat);
      this.seatservice.insertSeat(this.seat).subscribe(data=>{console.log(data)});
    });
    
  }
  totalfare(fare)
  {
   this.total+=fare; 
  }
  findseat()
  {
     this.s.forEach((element:Seat) => 
     {
        this.changeSeatColor(element);
        console.log(element);
     });
  }
  changeSeatColor(i:any){
    let id:any 
    id=document.getElementById(i);
    id.innerHTML=`  <img src="../assets/img/bookseat.png">`;
  }
  /* selected(id:any) 
   {
    var checkBox = document.getElementById("k");
    console.log(id.value);
    this.n=this.n^1;
    if(this.n)
      this.seat.isselected =true;
    else
      this.seat.isselected=false;
    console.log(this.seat.isselected);
  }*/
  ngOnInit(): void
  {
    this.Bookedseats();
  }

}