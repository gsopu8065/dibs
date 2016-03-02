/**
 * Created by srujangopu on 2/28/16.
 */
import {Injectable} from "angular2/core";
import {Inject} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class CartItemWebService{
    constructor(@Inject(Http) public http:Http){}

    getCartItemInformation(cartItemId:String){
        return result;
    }
}

var result = {
    images: [
        "http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg",
        "http://ecx.images-amazon.com/images/I/41E0YyTaNtL._SL420_SX309_CR0,0,309,420_FMwebp_QL65_.jpg",
        "http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg",
        "http://ecx.images-amazon.com/images/I/41E0YyTaNtL._SL420_SX309_CR0,0,309,420_FMwebp_QL65_.jpg"
    ],
    id: "1",
    title: "Title2",
    imgUrl: "http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg",
    price: "14.65",
    quantity: 2
}