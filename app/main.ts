import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Home} from './home/home.ts'
import {Search} from './search/search.ts'
bootstrap(Home,[HTTP_PROVIDERS, ROUTER_PROVIDERS]);


