import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Available } from "../models/availinput.model";
import { Travel } from "../models/travel.model";
//import { Available } from "../models/availinput.model";
import {User} from "../models/user.model";
// import { ProfileComponent } from './profile/profile.component';

@Injectable()

export class UserService{

    constructor(private getHttp:HttpClient,private httpsClient:HttpClient,private httpClient:HttpClient,private putClient:HttpClient,
        private pwdClient:HttpClient,private travel:HttpClient,private avail:HttpClient){
            
    }

    //login&signup=================================================
    public LoginCheckUsingApi(user:User)
    {
        return this.httpsClient.post("http://localhost:49817/api/Registered_User",user);

    }   
    public SignupUsingApi(user:User)
    {
        return this.getHttp.post("http://localhost:49817/api/Registered_User/post",user);
    }

    //dashboard===========================================================
    public ViewProfileDetails(user_id:number){
        
        return this.httpClient.get("http://localhost:49817/api/User/"+user_id);
    }

    public updateCustomer(user_id:number,user:User){
        return this.putClient.put("http://localhost:49817/api/User/"+user_id,user);

    }

    public ChangePasswordApi(user_id:number,user:User){
        return this.pwdClient.put("http://localhost:49817/api/User/"+user_id,user);

    }
    public GetSourceValues(){
        return this.travel.get("http://localhost:49817/api/Travel");
    }
    public PastBooking(id:number){
        return this.pwdClient.get("http://localhost:49817/api/PastBooking/"+id);
    }
    
      public GetBusesAvailable(data:any){
          return this.avail.post("http://localhost:49817/api/Search",data);
     }
    
}

