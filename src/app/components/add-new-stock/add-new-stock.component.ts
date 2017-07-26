import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from '../../services/quote';
import { StocksService } from '../../services/stocks';
import { SnackbarService } from '../../services/snackbar';
import { QuoteSearch } from '../../interfaces';

@Component({
  selector: 'app-add-new-stock',
  templateUrl: './add-new-stock.component.html',
  styleUrls: ['./add-new-stock.component.css']
})
export class AddNewStockComponent implements OnInit {
  stocks: any[];
  loading = false;
  constructor(
    private _quoteService: QuoteService,
    private _stocksService: StocksService,
    private _snackbarService: SnackbarService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    componentHandler.upgradeDom();
  }

  selectItem(stock: QuoteSearch): void {
    this._quoteService.getPrices([stock.symbol]).subscribe(price => {
      this.stocks = [stock];
      this.stocks[0].price = price[stock.symbol].price;
    });
  }

  addItem(stock: QuoteSearch, value: number): void {
    this.stocks = [];
    this._stocksService.AddStock(stock, value);
    this._snackbarService.showSnackbar(
      'Added',
      () => this._router.navigate(['/']),
      'Return to Portfolio'
    );
  }

  submitQuery(query: string): void {
    this.stocks = [];

    this.loading = true;
    this._quoteService
      .searchQuotes(query)
      .subscribe(
        data => (this.stocks = data),
        error =>
          this._snackbarService.showSnackbar('Error loading data from YAHOO')
      )
      .add(() => (this.loading = false));
  }
}
