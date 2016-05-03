import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
import {provide, enableProdMode} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

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
