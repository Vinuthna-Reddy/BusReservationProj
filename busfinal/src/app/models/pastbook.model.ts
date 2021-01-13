export class PastBooks{
    booking_id:number;
    pickup_place:string;
    drop_place:string;

    constructor(
        booking_id:number=0,
        pickup_place:string="",
        drop_place:string=""){
            this.booking_id=booking_id;
            this.pickup_place=pickup_place;
            this.drop_place=drop_place;
    }


}