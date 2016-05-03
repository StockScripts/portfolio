import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import PortfolioComponent from './portfolio';
import AddNewStockComponent from './add-new-stock';
import AboutComponent from './about';
import StocksService from '../services/stocks';
import SnackbarService from '../services/snackbar';

@Component({
  selector: 'portfolio-app',
  styles: [require('./app.css')],
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES],
  providers: [StocksService, SnackbarService]
})
@RouteConfig([
  { path: '/', name: 'Portfolio', component: PortfolioComponent, useAsDefault: true },
  { path: '/Add', name: 'Add', component: AddNewStockComponent},
  { path: '/About', name: 'About', component: AboutComponent}
])

export default class implements OnInit {
  title: string = 'Portfolio';

  ngOnInit(): void {
    componentHandler.upgradeDom();
  }
}

