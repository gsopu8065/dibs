/**
 * Created by srujangopu on 2/19/16.
 */
var HomePage = require('./homepage/homepage.po.js')
var ViewCart = require('./viewcart/viewcart.po.js')
var Checkout = require('./checkout/checkout.po.js')
var Payment = require('./payment/payment.po.js')
describe('Basic Checkout', function () {
    var homePage;
    var viewCartPage;
    var checkoutPage;
    var paymentPage;
    beforeEach(function () {
        browser.get('');
        homePage = new HomePage();
        viewCartPage = new ViewCart();
        checkoutPage = new Checkout();
        paymentPage = new Payment();
    });
    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Dibs');
    });
    it('Basic Checkout', function () {
        expect(homePage.dibsLogo.isPresent()).toEqual(true);
        expect(homePage.cartLogo.isPresent()).toEqual(true);
        expect(homePage.accountLogo.isPresent()).toEqual(true);
        homePage.cartLogo.click();

        viewCartPage.continueToCheckout.click();

        checkoutPage.email.sendKeys('srujanjack@gmail.com')
        checkoutPage.firstName.sendKeys('srujan')
        checkoutPage.lastName.sendKeys('jack')
        checkoutPage.streetAddress.sendKeys('1016 N plum grove rd')
        checkoutPage.zipCode.sendKeys('42101')
        checkoutPage.city.sendKeys('Nashville')
        checkoutPage.state.sendKeys('TN')
        checkoutPage.continueToPayment.click();

        paymentPage.cardNumber.sendKeys('543456789865')
        paymentPage.expireMonth.sendKeys('12')
        paymentPage.cvv.sendKeys('456')
        paymentPage.reviewOrder.click();

        browser.sleep(5000)

    });

});