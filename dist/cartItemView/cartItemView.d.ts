import { RouteParams } from "angular2/router";
import { CartItemWebService } from "./cartItemWebService";
export declare class CartItemView {
    routeParams: RouteParams;
    cartItemWebService: CartItemWebService;
    cartItemId: String;
    cartImages: any[];
    mainImage: string;
    cartItemTitle: string;
    cartItemPrice: string;
    constructor(routeParams: RouteParams, cartItemWebService: CartItemWebService);
    changeImage(index: number): void;
}
