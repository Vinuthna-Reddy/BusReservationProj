export class Seat
{
    Seat_no:number;
    Bus_ID:number;
    seat_status:string;
    passenger_name:string;
    booking_id:number;
    isselected:boolean;
    constructor(Seat_no:number=0,Bus_ID:number=0,seat_status:string="",passenger_name:string="",booking_id:number=0)
    {
        this.Seat_no=Seat_no;
        this.Bus_ID=Bus_ID;
        this.seat_status=seat_status;
        this.passenger_name=passenger_name;
        this.booking_id=booking_id;
        this.isselected=false;
    }
}