import { Http } from 'angular2/http';
declare class ViewCartWebService {
    http: Http;
    constructor(http: Http);
    getViewCart(): {
        title: string;
        imgUrl: string;
        price: string;
        quantity: number;
    }[];
}
export { ViewCartWebService };
