import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {QuoteSearch, Stock, StockPrices} from '../interfaces';
import QuoteService from './quote';

@Injectable()
export default class {
  stocks: Stock[] = JSON.parse(localStorage['portfolio'] || '[]');
  stockPrices: StockPrices = {};

  constructor(private _quoteService: QuoteService) {  }

  DeleteStock(i: number): void {
    this.stocks.splice(i, 1);
    this.SaveToLocalStorage();
  }

  GetStocks(): Observable<Stock[]> {
    const required: string[] = this.stocks.filter(d => !this.stockPrices[d.Symbol]).map(d => d.Symbol);
    return this._quoteService.getPrices(required)
      .map(prices => {
        Object.assign(this.stockPrices, prices);
        return this.stocks.map(({Symbol, Name, Quantity}) => (
          {
            Symbol,
            Name,
            Quantity,
            Price: this.stockPrices[Symbol].price,
            Change: this.stockPrices[Symbol].change
          })
        );
      });
  }

  AddStock(stock: QuoteSearch, quantity: number): void {
    this.stocks.push(<Stock>{ Symbol: stock.symbol, Name: stock.name, Quantity: quantity });
    this.SaveToLocalStorage();
  }

  SaveToLocalStorage(): void {
    localStorage['portfolio'] = JSON.stringify(this.stocks);
  }
}