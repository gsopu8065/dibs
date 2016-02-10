/**
 * Created by srujangopu on 2/7/16.
 */

import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'

@Component({
    selector: 'viewCartItem',
    styleUrls: ['app/viewCartItem/viewCartItem.css'],
    templateUrl: 'app/viewCartItem/viewCartItem.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class ViewCartItem {
    @Input() title;
    @Input() imgUrl;
    @Input() price;
    @Input() quantity;
}