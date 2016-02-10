/**
 * Created by srujangopu on 2/7/16.
 */
import {Injectable, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http'

@Injectable()
class ViewCartWebService{
    constructor(@Inject(Http) public http:Http){
    }

    getViewCart() {
        //return this.http.get('https://demo0180966.mockable.io/samlpe')
        return searchResults
    }
}

var searchResults = [
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


export {ViewCartWebService}