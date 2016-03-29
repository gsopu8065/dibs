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
const core_1 = require("angular2/core");
const router_1 = require("angular2/router");
const core_2 = require("angular2/core");
const router_2 = require("angular2/router");
const cartItemWebService_1 = require("./cartItemWebService");
const common_1 = require("angular2/common");
const common_2 = require("angular2/common");
let CartItemView = class CartItemView {
    constructor(routeParams, cartItemWebService) {
        this.routeParams = routeParams;
        this.cartItemWebService = cartItemWebService;
        this.cartImages = [];
        this.mainImage = "";
        this.cartItemTitle = "";
        this.cartItemPrice = "";
        this.cartItemId = routeParams.get('cartItemId');
        var cartResponse = cartItemWebService.getCartItemInformation(this.cartItemId);
        this.cartImages = cartResponse.images;
        this.mainImage = this.cartImages[0];
        this.cartItemTitle = cartResponse.title;
        this.cartItemPrice = cartResponse.price;
    }
    changeImage(index) {
        this.mainImage = this.cartImages[index];
    }
};
CartItemView = __decorate([
    core_1.Component({
        selector: 'cartItemView',
        templateUrl: 'app/cartItemView/cartItemView.html',
        styleUrls: ['app/cartItemView/cartItemView.css'],
        providers: [cartItemWebService_1.CartItemWebService],
        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, common_2.CORE_DIRECTIVES]
    }),
    __param(0, core_2.Inject(router_2.RouteParams)),
    __param(1, core_2.Inject(cartItemWebService_1.CartItemWebService)), 
    __metadata('design:paramtypes', [router_2.RouteParams, cartItemWebService_1.CartItemWebService])
], CartItemView);
exports.CartItemView = CartItemView;
//# sourceMappingURL=cartItemView.js.map