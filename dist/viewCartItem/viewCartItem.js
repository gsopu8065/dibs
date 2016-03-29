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
let ViewCartItem = class ViewCartItem {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ViewCartItem.prototype, "title", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ViewCartItem.prototype, "imgUrl", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ViewCartItem.prototype, "price", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ViewCartItem.prototype, "quantity", void 0);
ViewCartItem = __decorate([
    core_1.Component({
        selector: 'viewCartItem',
        styleUrls: ['app/viewCartItem/viewCartItem.css'],
        templateUrl: 'app/viewCartItem/viewCartItem.html',
        directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [])
], ViewCartItem);
exports.ViewCartItem = ViewCartItem;
//# sourceMappingURL=viewCartItem.js.map