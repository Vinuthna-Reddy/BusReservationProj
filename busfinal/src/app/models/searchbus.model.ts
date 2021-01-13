export class SearchBus{
    Bus_ID:number;
    Travel_ID: number;
    Bus_Type: string;
    Cost_Per_Seat:number;
    NO_of_Seats: number;
    pickup_place: string;
    drop_place:string;
    dept_time: Date;
    arrival_time: Date;
    constructor(Bus_ID:number=0,
        Travel_ID: number=0,
        Bus_Type: string="",
        Cost_Per_Seat:number=0,
        NO_of_Seats: number=0,
        pickup_place: string="",
        drop_place:string="",
        dept_time: Date,
        arrival_time: Date){
            this.Bus_ID=Bus_ID;
            this.Travel_ID= Travel_ID;
            this.Bus_Type= Bus_Type;
            this.Cost_Per_Seat=Cost_Per_Seat;
            this.NO_of_Seats= NO_of_Seats;
            this.pickup_place= pickup_place;
            this.drop_place=drop_place;
            this.dept_time= dept_time;
            this.arrival_time= arrival_time;
    }
    
    
}