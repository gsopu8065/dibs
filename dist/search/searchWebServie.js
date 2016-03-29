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
const http_1 = require('angular2/http');
let SearchWebService = class SearchWebService {
    constructor(http) {
        this.http = http;
    }
    getSearchResults() {
        return searchResults;
    }
};
SearchWebService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)), 
    __metadata('design:paramtypes', [http_1.Http])
], SearchWebService);
exports.SearchWebService = SearchWebService;
var searchResults = [
    {
        id: "1",
        title: "Title1 very good condition with high resolution",
        imgUrl: "http://ecx.images-amazon.com/images/I/41E0YyTaNtL._SL420_SX309_CR0,0,309,420_FMwebp_QL65_.jpg",
        price: "14.65"
    },
    {
        id: "2",
        title: "Title2",
        imgUrl: "http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg",
        price: "14.65"
    },
    {
        id: "3",
        title: "Title2",
        imgUrl: "http://ecx.images-amazon.com/images/I/41E0YyTaNtL._SL420_SX309_CR0,0,309,420_FMwebp_QL65_.jpg",
        price: "14.65"
    },
    {
        id: "4",
        title: "Title2",
        imgUrl: "http://ecx.images-amazon.com/images/I/41E0YyTaNtL._SL420_SX309_CR0,0,309,420_FMwebp_QL65_.jpg",
        price: "14.65"
    },
    {
        id: "5",
        title: "Title2",
        imgUrl: "http://ecx.images-amazon.com/images/I/41E0YyTaNtL._SL420_SX309_CR0,0,309,420_FMwebp_QL65_.jpg",
        price: "14.65"
    }
];
//# sourceMappingURL=searchWebServie.js.map