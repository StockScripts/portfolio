import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

import { Quote, QuoteSearch, StockPrices } from '../interfaces';

@Injectable()
export default class {
  constructor(private _http: Http, private _jsonp: Jsonp) { }

  getPrices(symbols: String[]): Observable<StockPrices> {

    if (symbols.length === 0) return Observable.of(<StockPrices>{});

    return this._http.get(`https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quote where symbol in ("${symbols.join('","')}")&format=json&env=store://datatables.org/alltableswithkeys`)
      .map((response) => [].concat(response.json().query.results.quote)
        .reduce((o: Object, v: Quote) => Object.assign(o, { [v.Symbol]: { price: v.LastTradePriceOnly, change: v.Change } }), {}));
  }

  searchQuotes(query: string): Observable<QuoteSearch[]> {
    return this._jsonp.get(`https://s.yimg.com/aq/autoc?region=US&lang=en-US&callback=JSONP_CALLBACK&query=${query}`)
      .map((response) => response.json().ResultSet.Result);
  }

}
