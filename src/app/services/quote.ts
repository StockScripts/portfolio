import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/map';

import { Quote, QuoteSearch, StockPrices } from '../interfaces';

interface Yahoo {
  query: { results: { quote: Quote[] } };
}
@Injectable()
export class QuoteService {
  constructor(private _http: HttpClient) {}

  getPrices(symbols: String[]) {
    if (symbols.length === 0) {
      return Observable.of(<StockPrices>{});
    }
    return this._http
      .get(
        `https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quote where symbol in ("${symbols.join(
          '","'
        )}")&format=json&env=store://datatables.org/alltableswithkeys`
      )
      .map((response: Yahoo) =>
        [].concat(response.query.results.quote).reduce(
          (o: Object, v: Quote) =>
            Object.assign(o, {
              [v.Symbol]: { price: v.LastTradePriceOnly, change: v.Change }
            }),
          {}
        )
      );
  }
  searchQuotes(query: string) {
    return this._http
      .jsonp(
        `https://s.yimg.com/aq/autoc?region=US&lang=en-US&&query=${query}`,
        'callback'
      )
      .map((response: any) => response.ResultSet.Result);
  }
}
