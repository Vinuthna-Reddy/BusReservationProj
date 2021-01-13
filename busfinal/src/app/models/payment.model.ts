export class Payment
{
    transaction_id:number;
    user_id:number;
    guest_id:number;
    booking_id:number;
    total_price:number;
    payment_status:string;
    constructor(transaction_id=0,user_id=0,guest_id=null,booking_id=0,total_price=0,payment_status="success")
    {
        this.transaction_id=transaction_id;
        this.user_id=user_id;
        this.guest_id=guest_id;
        this.booking_id=booking_id;
        this.total_price=total_price;
        this.payment_status=payment_status;
    }
}