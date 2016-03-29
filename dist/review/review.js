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
const common_1 = require('angular2/common');
const router_1 = require('angular2/router');
let Review = class Review {
    constructor() {
        this.searchResults = [
            {
                title: "Title1 very good condition with high resolution",
                imgUrl: "http://ecx.images-amazon.com/images/I/41E0YyTaNtL._SL420_SX309_CR0,0,309,420_FMwebp_QL65_.jpg",
                price: "14.65",
                quantity: 1
            },
            {
                title: "Title2",
                imgUrl: "http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg",
                price: "14.65",
                quantity: 2
            }
        ];
    }
};
Review = __decorate([
    core_1.Component({
        selector: 'review',
        templateUrl: 'app/review/review.html',
        styleUrls: ['app/review/review.css'],
        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [])
], Review);
exports.Review = Review;
//# sourceMappingURL=review.js.map