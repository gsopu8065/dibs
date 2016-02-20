/**
 * Created by srujangopu on 2/19/16.
 */
describe('Basic Checkout', function () {
    beforeEach(function () {
        browser.get('');
    });
    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Dibs');
    });
    it('should have <section>', function () {
        expect(element(by.css('app section')).isPresent()).toEqual(true);
    });
    /*it('should have <nav>', function () {
        expect(element(by.css('app section nav')).isPresent()).toEqual(true);
    });
    it('should have correct nav text for Home', function () {
        expect(element(by.css('app section nav a:first-child')).getText()).toEqual('Home');
    });
    it('should have correct nav text for About', function () {
        expect(element(by.css('app section nav a:last-child')).getText()).toEqual('About');
    });*/
});