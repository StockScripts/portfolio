import { Component, Directive, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Stock } from '../interfaces';
import StocksService from '../services/stocks';
import SnackbarService from '../services/snackbar';

@Component({
  selector: 'portfolio',
  styles: [require('./portfolio.css')],
  template: require('./portfolio.html')
})
export default class implements OnInit {

  stocks: Stock[];
  loading: boolean;

  constructor(private _stocksService: StocksService, private _snackbarService: SnackbarService) { }

  ngOnInit(): void {
    const timeout: number = window.setTimeout(() => this.loading = true, 500);

    this._stocksService.GetStocks()
      .subscribe(
      stocks => this.stocks = stocks,
      error => this._snackbarService.showSnackbar('Error loading data from YAHOO')
      )
      .add(() => {
        this.loading = false;
        clearTimeout(timeout);
      });
  };

  delete(i: number): void {
    this._stocksService.DeleteStock(i);
    this.stocks.splice(i, 1);
  }

}
