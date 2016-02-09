/**
 * Created by srujangopu on 2/7/16.
 */

import {bootstrap} from 'angular2/bootstrap'
import {Component, Inject} from 'angular2/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common'

import {SearchWebService} from './searchWebServie.ts'
import {SearchModule} from '../searchModule/searchModule.ts'

@Component({
    selector: 'search',
    templateUrl: 'app/search/search.html',
    styleUrls: ['app/search/search.css'],
    providers: [SearchWebService],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, SearchModule]
})

export class Search {
    public results;
    public resultCount = 1234;
    constructor(@Inject(SearchWebService) public searchWebService:SearchWebService){
       // searchWebService.getSearchResults().subscribe(res => this.results = res.json().msg)
        this.results = searchWebService.getSearchResults()
    }


}