export class Available{
    pickup_place:string;
    drop_place:string;
    Departure_Time:string;

    constructor(pickup_place:string="",drop_place:string="",Departure_Time:string=""){
        this.pickup_place=pickup_place;
        this.drop_place=drop_place;
        this.Departure_Time=Departure_Time;

    }
}