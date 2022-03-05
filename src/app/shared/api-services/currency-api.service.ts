import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { ListQueryResult } from '../models/base/list-query-result.model';
import { CountryCurrency } from '../models/currency/country-currency.model';
import { SingleQueryResult } from '../models/base/single-query-result.model';
import { ExchangeRate } from '../models/rate/exchange-rate.model';

@Injectable({providedIn: 'root'})
export class CurrencyAPIService {

  constructor(private http: HttpClient) { }

  getAllCurrencies() : Observable<ListQueryResult<CountryCurrency>> {
    const url = `${environment.baseUrl}/Currency`;
    return this.http.get<ListQueryResult<CountryCurrency>>(url);
  }

  getAvailableCurrencies() : Observable<SingleQueryResult<ExchangeRate>> {
    const url = `${environment.baseUrl}/Currency/available`;
    return this.http.get<SingleQueryResult<ExchangeRate>>(url);
  }
}
