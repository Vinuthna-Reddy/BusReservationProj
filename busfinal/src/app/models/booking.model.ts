export class Booking
{
    booking_id:number;
    user_id:number;
    Guest_id:number;
    Travel_id:number;
    coach_bus_id:number;
    booking_status:string;
    bus_id:number;
    constructor(booking_id:number=0,user_id:number=0,Guest_id:number=0,Travel_id:number=0,coach_bus_id:number=0,booking_status:string="",bus_id:number)
    {
            this.booking_id=booking_id;
            this.user_id=user_id;
            this.Guest_id=Guest_id;
            this.Travel_id=Travel_id;
            this.coach_bus_id=coach_bus_id;
            this.booking_status=booking_status;
            this.bus_id=bus_id;
    }
}