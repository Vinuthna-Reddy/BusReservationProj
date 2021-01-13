import { Component, OnInit } from '@angular/core';
import {BookingService} from "../services/booking.service";

import  jspdf from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  busdetails:any;
  total:any;
  user:any;
  bookid:any;
  bookingdetails:any;
  seatno:any;
  constructor(private bookingservice:BookingService) 
  { 
     this.busdetails=JSON.parse(localStorage.getItem("BusDetails"));
     this.total=localStorage.getItem("total");
     this.user=localStorage.getItem("user-id");
     this.bookid=localStorage.getItem("Book-id");
     this.seatno=localStorage.getItem("seats");
     console.log(this.bookid);
     console.log(this.busdetails.Bus_ID);
     this.bookingservice.GetByBookingId(this.bookid).subscribe(b=>{this.bookingdetails=b;console.log(this.bookingdetails);})
   }
  download()
  {
    this.bookingdetails.booking_status="success";
    this.bookingservice.ChangeB_statusApi(this.bookid,this.bookingdetails).subscribe(msg=>{console.log("book status updated");})
    var element=document.getElementById('printtable')
    html2canvas(element).then((canvas)=>{
      console.log(canvas)
      var imgData=canvas.toDataURL('image/png')
      var doc =new jspdf()

      var imgHeight=canvas.height*208/canvas.width;
      doc.addImage(imgData,0,0,208,imgHeight);
      doc.save("ticket.pdf");
    })
  }
  logout()
  {
    localStorage.clear();
  }
  ngOnInit(): void {
  }

}
