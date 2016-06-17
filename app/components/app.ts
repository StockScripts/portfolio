import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import StocksService from '../services/stocks';
import SnackbarService from '../services/snackbar';

@Component({
  selector: 'portfolio-app',
  styles: [require('./app.css')],
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES],
  providers: [StocksService, SnackbarService]
})
export default class implements OnInit {
  title: string = 'Portfolio';

  ngOnInit(): void {
    componentHandler.upgradeDom();
  }
}

