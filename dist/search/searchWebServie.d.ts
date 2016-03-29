import { Http } from 'angular2/http';
declare class SearchWebService {
    http: Http;
    constructor(http: Http);
    getSearchResults(): {
        id: string;
        title: string;
        imgUrl: string;
        price: string;
    }[];
}
export { SearchWebService };
