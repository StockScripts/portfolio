import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from 'angular2/http';
import {provide, enableProdMode} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';

import AppComponent from './components/app';
import QuoteService from './services/quote';

if ('production' === NODE_ENV) enableProdMode();

bootstrap(AppComponent,
  [ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    QuoteService
  ]
);
