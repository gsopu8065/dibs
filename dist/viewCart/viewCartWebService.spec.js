"use strict";
const testing_1 = require('angular2/testing');
const core_1 = require('angular2/core');
const ViewCartWebService_1 = require('./ViewCartWebService');
const http_1 = require('angular2/http');
const testing_2 = require('angular2/http/testing');
testing_1.describe('MyService Tests', () => {
    let injector, backend, mockBackend, httpService, _viewCartWebService;
    beforeEach(() => {
        injector = core_1.Injector.resolveAndCreate([
            http_1.HTTP_PROVIDERS,
            testing_2.MockBackend,
            core_1.provide(http_1.XHRBackend, { useClass: testing_2.MockBackend }),
            ViewCartWebService_1.ViewCartWebService
        ]);
        mockBackend = injector.get(testing_2.MockBackend);
        backend = injector.get(http_1.XHRBackend);
        httpService = injector.get(http_1.Http);
        _viewCartWebService = injector.get(ViewCartWebService_1.ViewCartWebService);
    });
    testing_1.it('Should return a list of cartItems', () => {
        var cartItems = _viewCartWebService.getViewCart();
        testing_1.expect(cartItems.length).toEqual(2);
    });
});
//# sourceMappingURL=viewCartWebService.spec.js.map