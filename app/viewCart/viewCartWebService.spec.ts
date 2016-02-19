/**
 * Created by srujangopu on 2/18/16.
 */
/// <reference path="../../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts" />
import {describe,expect,it,inject,beforeEachProviders} from 'angular2/testing';
import {provide, Injector} from 'angular2/core';
import {ViewCartWebService} from './ViewCartWebService';
import {Http, HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

describe('MyService Tests', () => {
    let injector,
        backend,
        mockBackend,
        httpService,
        _viewCartWebService;

    beforeEach(() => {

        injector = Injector.resolveAndCreate([
            HTTP_PROVIDERS,
            MockBackend,
            provide(XHRBackend, {useClass: MockBackend}),
            ViewCartWebService
        ]);

        mockBackend = injector.get(MockBackend);
        backend = injector.get(XHRBackend);
        httpService = injector.get(Http);
        _viewCartWebService = injector.get(ViewCartWebService);
    });

    it('Should return a list of cartItems', () => {
        var cartItems = _viewCartWebService.getViewCart()
        expect(cartItems.length).toEqual(2);
    });
});