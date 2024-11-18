
class PaymentRequest{
    constructor(paymentMethod, amount, recipient_phone){
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.recipient_phone = recipient_phone;
    }
}

module.exports = PaymentRequest;
