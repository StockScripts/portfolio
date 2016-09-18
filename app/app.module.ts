import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import AppComponent from './components/app';
import MdlFocus from './directives/mdl-focus';
import NegativePositive from './directives/negative-positive';

import StocksService from './services/stocks';
import SnackbarService from './services/snackbar';
import QuoteService from './services/quote';

import { AppRoutingModule, routeComponents } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routeComponents,
    MdlFocus,
    NegativePositive
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    StocksService,
    SnackbarService,
    QuoteService
  ]
})
export class AppModule { }