export class Travel{
    Travel_ID:number;
    pickup_place: string;
    drop_place: string;
    Departure_Time: string;
    Arrival_Time: string;
    Bus_ID: number;
    no_of_days:number;
    coach_bus_id: number;

    constructor(Travel_ID:number=0,
        pickup_place: string="",
        drop_place: string="",
        Departure_Time: string="",
        Arrival_Time: string="",
        Bus_ID: number=0,
        no_of_days:number=0,
        coach_bus_id: number=0)
        {
            this.Travel_ID=Travel_ID;
            this.pickup_place=pickup_place;
            this.drop_place=drop_place;
            this.Departure_Time=Departure_Time;
            this.Arrival_Time=Arrival_Time;
            this.Bus_ID=Bus_ID;
            this.no_of_days=no_of_days;
            this.coach_bus_id=coach_bus_id;
    }

}