/**
 * Created by srujangopu on 2/7/16.
 */

import {Component, Input} from 'angular2/core';
@Component({
    selector: 'searchModule',
    styleUrls: ['app/searchModule/searchModule.css'],
    templateUrl: 'app/searchModule/searchModule.html'
})

export class SearchModule {
    @Input() title;
    @Input() imgUrl;
    @Input() price;
}