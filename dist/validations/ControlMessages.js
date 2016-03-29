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
const ValidationService_1 = require('./ValidationService');
let ControlMessages = class ControlMessages {
    constructor(_formDir) {
        this._formDir = _formDir;
    }
    get errorMessage() {
        let c = this._formDir.form.find(this.controlName);
        for (let propertyName in c.errors) {
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                return ValidationService_1.ValidationService.getValidatorErrorMessage(propertyName);
            }
        }
        return null;
    }
};
ControlMessages = __decorate([
    core_1.Component({
        selector: 'control-messages',
        inputs: ['controlName: control'],
        template: ` <label style="color: #a94442;" *ngIf="errorMessage !== null" class="control-label" for="inputError2">{{errorMessage}}</label>`
    }),
    __param(0, core_1.Host()), 
    __metadata('design:paramtypes', [common_1.NgFormModel])
], ControlMessages);
exports.ControlMessages = ControlMessages;
//# sourceMappingURL=ControlMessages.js.map