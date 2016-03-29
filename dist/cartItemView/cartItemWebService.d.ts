import { Http } from "angular2/http";
export declare class CartItemWebService {
    http: Http;
    constructor(http: Http);
    getCartItemInformation(cartItemId: String): {
        images: string[];
        id: string;
        title: string;
        imgUrl: string;
        price: string;
        quantity: number;
    };
}
