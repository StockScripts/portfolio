import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../services/snackbar';
import { StocksService } from '../../services/stocks';
import { Stock } from '../../interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  stocks: Stock[];
  loading: boolean;

  constructor(
    private _stocksService: StocksService,
    private _snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    const timeout: number = window.setTimeout(() => (this.loading = true), 500);

    this._stocksService
      .GetStocks()
      .subscribe(
        stocks => (this.stocks = stocks),
        error =>
          this._snackbarService.showSnackbar('Error loading data from YAHOO')
      )
      .add(() => {
        this.loading = false;
        clearTimeout(timeout);
      });
  }

  delete(i: number): void {
    this._stocksService.DeleteStock(i);
    this.stocks.splice(i, 1);
  }
}
