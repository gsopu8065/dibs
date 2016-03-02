/**
 * Created by srujangopu on 2/7/16.
 */

import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
@Component({
    selector: 'searchModule',
    styleUrls: ['app/searchModule/searchModule.css'],
    templateUrl: 'app/searchModule/searchModule.html',
    directives: [ROUTER_DIRECTIVES]
})

export class SearchModule {
    @Input() title;
    @Input() imgUrl;
    @Input() price;
    @Input() id;
}