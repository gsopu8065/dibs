"use strict";
const browser_1 = require('angular2/platform/browser');
const http_1 = require('angular2/http');
const core_1 = require('angular2/core');
const router_1 = require('angular2/router');
const home_ts_1 = require('./home/home.ts');
browser_1.bootstrap(home_ts_1.Home, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=main.js.map