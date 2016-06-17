import {Component, Output, Directive, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Quote, QuoteSearch} from '../interfaces';
import QuoteService from '../services/quote';
import StocksService from '../services/stocks';
import SnackbarService from '../services/snackbar';

@Directive({
  selector: '[mdlFocus]'
})
export class MdlFocus implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    componentHandler.upgradeElement(this.elementRef.nativeElement.parentElement);
    this.elementRef.nativeElement.focus();
  }
}
@Component({
  selector: 'add-new-stock',
  styles: [require('./add-new-stock.css')],
  template: require('./add-new-stock.html'),
  directives: [MdlFocus]
})
export default class implements OnInit {
  stocks: any[];
  loading: boolean = false;
  constructor(private _quoteService: QuoteService,
    private _stocksService: StocksService,
    private _snackbarService: SnackbarService,
    private _router: Router
  ) { }

  ngOnInit(): void {
        componentHandler.upgradeDom();
  }

  selectItem(stock: QuoteSearch): void {
    this._quoteService.getPrices([stock.symbol])
      .subscribe(price => {
        this.stocks = [stock];
        this.stocks[0].price = price[stock.symbol].price;
      });
  }

  addItem(stock: QuoteSearch, value: number): void {
    this.stocks = [];
    this._stocksService.AddStock(stock, value);
    this._snackbarService.showSnackbar('Added', () => this._router.navigate(['/']), 'Return to Portfolio');
  }

  submitQuery(query: string): void {
    this.stocks = [];

    this.loading = true;
    this._quoteService.searchQuotes(query)
      .subscribe(
        data => this.stocks = data,
        error => this._snackbarService.showSnackbar('Error loading data from YAHOO')
      ).add(() => this.loading = false);
  }

}