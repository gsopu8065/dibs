/**
 * Created by srujangopu on 2/28/16.
 */
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Inject} from "angular2/core";
import {RouteParams} from "angular2/router";
import {CartItemWebService} from "./cartItemWebService";
import {FORM_DIRECTIVES} from "angular2/common";
import {CORE_DIRECTIVES} from "angular2/common";
import {Location} from "angular2/router";

@Component({
    selector: 'cartItemView',
    templateUrl: 'app/cartItemView/cartItemView.html',
    styleUrls: ['app/cartItemView/cartItemView.css'],
    providers: [CartItemWebService],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class CartItemView{

    cartItemId:String;
    cartImages = [];
    mainImage = ""

    cartItemTitle = ""
    cartItemPrice = ""

    constructor(@Inject(RouteParams) public routeParams:RouteParams,
    @Inject(CartItemWebService) public cartItemWebService:CartItemWebService){
        this.cartItemId =  routeParams.get('cartItemId')
        var cartResponse: any = cartItemWebService.getCartItemInformation(this.cartItemId)
        this.cartImages = cartResponse.images
        this.mainImage = this.cartImages[0]

        this.cartItemTitle = cartResponse.title
        this.cartItemPrice = cartResponse.price
    }

    changeImage(index:number){
        this.mainImage = this.cartImages[index]
    }
}