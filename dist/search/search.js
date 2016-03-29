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
const searchWebServie_ts_1 = require('./searchWebServie.ts');
const searchModule_ts_1 = require('../searchModule/searchModule.ts');
let Search = class Search {
    constructor(searchWebService) {
        this.searchWebService = searchWebService;
        this.resultCount = 1234;
        this.results = searchWebService.getSearchResults();
    }
};
Search = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: 'app/search/search.html',
        styleUrls: ['app/search/search.css'],
        providers: [searchWebServie_ts_1.SearchWebService],
        directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, searchModule_ts_1.SearchModule]
    }),
    __param(0, core_1.Inject(searchWebServie_ts_1.SearchWebService)), 
    __metadata('design:paramtypes', [searchWebServie_ts_1.SearchWebService])
], Search);
exports.Search = Search;
//# sourceMappingURL=search.js.map