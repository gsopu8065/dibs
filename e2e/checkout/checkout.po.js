/**
 * Created by srujangopu on 2/23/16.
 */
var Checkout = function(){

    this.email = element(by.id('email'));
    this.firstName = element(by.id('firstName'));
    this.lastName = element(by.id('lastName'));
    this.streetAddress = element(by.id('streetAddress'));
    this.zipCode = element(by.id('zipCode'));
    this.city = element(by.id('city'));
    this.state = element(by.id('state'));
    this.continueToPayment = element(by.buttonText('Continue to payment'));
}
module.exports = Checkout