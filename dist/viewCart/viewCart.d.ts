import { Router } from 'angular2/router';
import { ViewCartWebService } from './ViewCartWebService.ts';
export declare class ViewCart {
    viewCartWebService: ViewCartWebService;
    _router: Router;
    results: any;
    constructor(viewCartWebService: ViewCartWebService, _router: Router);
    continueToCheckout(): void;
}
