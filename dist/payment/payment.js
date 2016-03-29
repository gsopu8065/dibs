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
const ControlMessages_1 = require('../validations/ControlMessages');
let Payment = class Payment {
    constructor(builder) {
        this.builder = builder;
        this.cardNumber = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required]));
        this.expireMonth = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required]));
        this.cvv = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required]));
        this.form = builder.group({
            cardNumber: this.cardNumber,
            expireMonth: this.expireMonth,
            cvv: this.cvv
        });
    }
};
Payment = __decorate([
    core_1.Component({
        selector: 'payment',
        templateUrl: 'app/payment/payment.html',
        styleUrls: ['app/payment/payment.css'],
        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ControlMessages_1.ControlMessages]
    }),
    __param(0, core_1.Inject(common_1.FormBuilder)), 
    __metadata('design:paramtypes', [common_1.FormBuilder])
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map