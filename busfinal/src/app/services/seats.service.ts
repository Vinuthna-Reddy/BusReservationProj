import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Seat} from "../models/seats.model";

@Injectable()
export class SeatService{
    
    constructor(private getHttp:HttpClient)
    {
    }
    public GetBookedseats(seat:Seat)
    {
        return this.getHttp.post("http://localhost:49817/api/seats",seat);
    }
    public insertSeat(seat:Seat)
    {
        return this.getHttp.post("http://localhost:49817/api/seats/post",seat);
    }
}