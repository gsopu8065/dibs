/**
 * Created by srujangopu on 2/23/16.
 */
var ViewCart = function(){

    this.continueToCheckout = element(by.id('CONTINUE_BUTTON_DIV'));
    this.cartItems = element(by.xpath('//viewcartitem'));
}
module.exports = ViewCart