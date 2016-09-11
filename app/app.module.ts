import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, JsonpModule } from '@angular/http';

import AppComponent  from './components/app';
import MdlFocus from './directives/mdl-focus';
import NegativePositive from './directives/negative-positive';

import StocksService from './services/stocks';
import SnackbarService from './services/snackbar';
import QuoteService from './services/quote';

import AppRoutingModule  from './app.routing';

import PortfolioComponent from './components/portfolio';
import AddNewStockComponent from './components/add-new-stock';
import AboutComponent from './components/about';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, AppRoutingModule ],
  declarations: [ 
    AppComponent,
    PortfolioComponent,
    AddNewStockComponent,
    AboutComponent,
    MdlFocus,
    NegativePositive
  ],
  bootstrap: [ AppComponent ],
  providers: [ StocksService, SnackbarService, QuoteService ]
})
export class AppModule { }