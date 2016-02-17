/**
 * Created by srujangopu on 2/8/16.
 */
import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'header',
    templateUrl: 'app/header/header.html',
    styleUrls: ['app/header/header.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class Header {

}