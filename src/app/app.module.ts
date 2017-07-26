import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClientModule,
  HttpClientJsonpModule,
  JsonpClientBackend,
  JsonpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AddNewStockComponent } from './components/add-new-stock/add-new-stock.component';

import { StocksService } from './services/stocks';
import { QuoteService } from './services/quote';
import { SnackbarService } from './services/snackbar';
import { MdlFocusDirective } from './directives/mdl-focus';
import { NegativePositiveDirective } from './directives/negative-positive';

const appRoutes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: '', component: PortfolioComponent },
  { path: 'Add', component: AddNewStockComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    AddNewStockComponent,
    MdlFocusDirective,
    NegativePositiveDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StocksService, QuoteService, SnackbarService, JsonpClientBackend],
  bootstrap: [AppComponent]
})
export class AppModule {}
