import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Booking } from "../models/booking.model";
import {Payment} from "../models/payment.model";

@Injectable()
export class BookingService{
    
    constructor(private getHttp:HttpClient,private postHttp:HttpClient,private pmtHttp:HttpClient,private pendHttp:HttpClient,private getb:HttpClient,private getu:HttpClient)
    {
    }
    public ChangeB_statusApi(user_id:number,book:Booking)
    {
        return this.getu.put("http://localhost:49817/api/Bookings/"+user_id,book);
    }
    public GetByBookingId(bookid)
    {
        return this.getb.get("http://localhost:49817/api/Bookings/"+bookid);
    }
    public GetBooking() 
    {
        return this.getHttp.get("http://localhost:49817/api/Bookings");
    }
    public insertbooking(book:Booking)
    {
        return this.postHttp.post("http://localhost:49817/api/Bookgenerate",book);
    }
    public makepayment(pay:Payment)
    {
        return this.pmtHttp.post("http://localhost:49817/api/payments",pay);
    }
    public pendingpayment(book:Booking)
    {
        return this.pendHttp.post("http://localhost:49817/api/Bookgenerate/PendingBooking",book);
    }
}