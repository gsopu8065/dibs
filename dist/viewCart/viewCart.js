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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('angular2/core');
const common_1 = require('angular2/common');
const router_1 = require('angular2/router');
const ViewCartWebService_ts_1 = require('./ViewCartWebService.ts');
const viewCartItem_ts_1 = require('../viewCartItem/viewCartItem.ts');
let ViewCart = class ViewCart {
    constructor(viewCartWebService, _router) {
        this.viewCartWebService = viewCartWebService;
        this._router = _router;
        this.results = viewCartWebService.getViewCart();
    }
    continueToCheckout() {
        this._router.navigate(['Checkout']);
    }
};
ViewCart = __decorate([
    core_1.Component({
        selector: 'viewCart',
        templateUrl: 'app/viewCart/viewCart.html',
        styleUrls: ['app/viewCart/viewCart.css'],
        providers: [ViewCartWebService_ts_1.ViewCartWebService],
        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, viewCartItem_ts_1.ViewCartItem]
    }),
    __param(0, core_1.Inject(ViewCartWebService_ts_1.ViewCartWebService)),
    __param(1, core_1.Inject(router_1.Router)), 
    __metadata('design:paramtypes', [ViewCartWebService_ts_1.ViewCartWebService, router_1.Router])
], ViewCart);
exports.ViewCart = ViewCart;
//# sourceMappingURL=viewCart.js.map