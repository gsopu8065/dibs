/**
 * Created by srujangopu on 2/7/16.
 */

import {bootstrap} from 'angular2/bootstrap'
import {Component, Inject} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'

import {ViewCartWebService} from './ViewCartWebService.ts'
import {ViewCartItem} from '../viewCartItem/viewCartItem.ts'

@Component({
    selector: 'viewCart',
    templateUrl: 'app/viewCart/viewCart.html',
    styleUrls: ['app/viewCart/viewCart.css'],
    providers: [ViewCartWebService],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ViewCartItem]
})

export class ViewCart {
    public results;
    constructor(@Inject(ViewCartWebService) public viewCartWebService:ViewCartWebService){
        // viewCartWebService.getViewCart().subscribe(res => this.results = res.json().msg)
        this.results = viewCartWebService.getViewCart()
    }


}