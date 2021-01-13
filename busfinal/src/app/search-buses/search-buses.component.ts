import { Component, OnInit } from '@angular/core';
import { Available } from '../models/availinput.model';
// import { SearchBus } from '../models/searchbus.model';
// import { Travel } from '../models/travel.model';
import { UserService } from '../services/user.service';
import {Booking} from '../models/booking.model';
import {BookingService} from '../services/booking.service'

@Component({
  selector: 'app-search-buses',
  templateUrl: './search-buses.component.html',
  styleUrls: ['./search-buses.component.css']
})
export class SearchBusesComponent implements OnInit {

  data:any;
  buses:any;
  show:boolean=true;
  bus:any;
  avail: any;
  pickup_place: string="";
  drop_place: string="";
  Departure_Time: string="";
  temp:any;
  book:Booking;
  
  constructor(private userService:UserService,private bookingservice:BookingService) { 
    //this.avail=new Available(this.pickup_place,this.drop_place,this.Departure_Time);
    //this.buses=new SearchBus();
    this.temp=localStorage.getItem("user-id");
    this.book=new Booking();
    this.book.user_id=this.temp;
  }

   GetBuses(pickup_places:any,drop_places:any,Departure_Times:any){
     var source=pickup_places.value;
     var dest=drop_places.value;
     var start=Departure_Times.value;
     this.temp=new Available(source,dest,start);
     //console.log(source,dest,start);
     //s=>{console.log(this.buses=s)}
     this.userService.GetBusesAvailable(this.temp).subscribe(s=>this.buses=s);
   }
   busseat(item)
   {
      console.log(item);
      localStorage.setItem("BusDetails",JSON.stringify(item));
      this.book.Travel_id=item.Travel_ID;
      this.book.Guest_id=null;
      this.book.coach_bus_id=null;
      this.book.booking_status="pending";
      this.book.bus_id=item.Bus_ID;
      this.bookingservice.insertbooking(this.book).subscribe(x=>{console.log(x)});
   }
  ngOnInit(): void {
     this.userService.GetSourceValues().subscribe(s=>{this.data=s});
  }

}
