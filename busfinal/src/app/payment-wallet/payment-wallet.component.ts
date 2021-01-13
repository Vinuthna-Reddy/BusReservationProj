import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-payment-wallet',
  templateUrl: './payment-wallet.component.html',
  styleUrls: ['./payment-wallet.component.css']
})
export class PaymentWalletComponent implements OnInit {

  user:any;
  user_id:any=localStorage.getItem("user-id");
  constructor(private userService:UserService) { 
    this.userService.ViewProfileDetails(this.user_id).subscribe(u=>{this.user=u});
  }

  ngOnInit(): void {
  }

}
