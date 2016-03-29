"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('angular2/core');
const router_1 = require('angular2/router');
const search_ts_1 = require('../search/search.ts');
const viewCart_ts_1 = require('../viewCart/viewCart.ts');
const payment_ts_1 = require('../payment/payment.ts');
const checkout_ts_1 = require('../checkout/checkout.ts');
const review_ts_1 = require('../review/review.ts');
const header_ts_1 = require('../header/header.ts');
const cartItemView_1 = require("../cartItemView/cartItemView");
let Home = class Home {
};
Home = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/home/home.html',
        styleUrls: ['app/home/home.css'],
        directives: [router_1.ROUTER_DIRECTIVES, header_ts_1.Header]
    }),
    router_1.RouteConfig([
        { path: '/', component: search_ts_1.Search, name: 'Home', useAsDefault: true },
        { path: '/viewCart', component: viewCart_ts_1.ViewCart, name: 'ViewCart' },
        { path: '/cartItemView/:cartItemId', component: cartItemView_1.CartItemView, name: 'CartItemView' },
        { path: '/checkout', component: checkout_ts_1.Checkout, name: 'Checkout' },
        { path: '/payment', component: payment_ts_1.Payment, name: 'Payment' },
        { path: '/review', component: review_ts_1.Review, name: 'Review' }
    ]), 
    __metadata('design:paramtypes', [])
], Home);
exports.Home = Home;
//# sourceMappingURL=home.js.map