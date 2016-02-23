/**
 * Created by srujangopu on 2/20/16.
 */
import {Component, Inject} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'
import { RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'review',
    templateUrl: 'app/review/review.html',
    styleUrls: ['app/review/review.css'],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class Review {
    searchResults = [
    {
        title: "Title1 very good condition with high resolution",
        imgUrl: "http://ecx.images-amazon.com/images/I/41E0YyTaNtL._SL420_SX309_CR0,0,309,420_FMwebp_QL65_.jpg",
        price: "14.65",
        quantity: 1
    },
    {
        title: "Title2",
        imgUrl: "http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg",
        price: "14.65",
        quantity: 2
    }
]
}