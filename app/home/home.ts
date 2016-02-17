/**
 * Created by srujangopu on 2/8/16.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Search} from '../search/search.ts'
import {ViewCart} from '../viewCart/viewCart.ts'
import {Payment} from '../payment/payment.ts'
import {Checkout} from '../checkout/checkout.ts'
import {Header} from '../header/header.ts'

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    styleUrls: ['app/home/home.css'],
    directives: [ROUTER_DIRECTIVES, Search, ViewCart,Checkout, Header, Payment]
})

@RouteConfig([
    {path: '/', component: Search, name: 'Home', useAsDefault: true},
    {path: '/viewCart', component: ViewCart, name: 'ViewCart'},
    {path: '/checkout', component: Checkout, name: 'Checkout'},
    {path: '/payment', component: Payment, name: 'Payment'}
])
export class Home {

}