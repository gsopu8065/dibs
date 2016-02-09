/**
 * Created by srujangopu on 2/8/16.
 */
import {Component} from 'angular2/core';
import {Search} from '../search/search.ts'
import {Header} from '../header/header.ts'

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    styleUrls: ['app/home/home.css'],
    directives: [Search, Header]
})
export class Home {

}