import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, JSONP_PROVIDERS} from '@angular/http';
import {provide, enableProdMode} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import APP_ROUTER_PROVIDERS from './routes';

import AppComponent from './components/app';
import QuoteService from './services/quote';

if ('production' === NODE_ENV) enableProdMode();

bootstrap(AppComponent,
  [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    QuoteService
  ]
);
