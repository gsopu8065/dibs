/**
 * Created by srujangopu on 2/23/16.
 */
var Payment = function(){

    this.cardNumber = element(by.id('cardNumber'));
    this.expireMonth = element(by.id('expireMonth'));
    this.cvv = element(by.id('cvv'));
    this.reviewOrder = element(by.buttonText('Review Order'));
}
module.exports = Payment