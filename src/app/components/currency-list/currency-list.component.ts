import { CountryCurrency } from './../../shared/models/currency/country-currency.model';
import { Component, OnInit } from '@angular/core';
import { CurrencyAPIService } from 'src/app/shared/api-services/currency-api.service';
import { ExchangeRateDetail } from 'src/app/shared/models/rate/exchange-rate-detail.model';
import { ExchangeRate } from 'src/app/shared/models/rate/exchange-rate.model';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencyList: CountryCurrency[] | undefined = [];
  availableCurrencyList: ExchangeRate = {};
  availableDate: Date = new Date();

  constructor(private _currencyAPIService: CurrencyAPIService) { }

  ngOnInit(): void {
    this.fetchAllCurrencies();
    this.fetchAvailableCurrencies();
  }

  fetchAllCurrencies() {
    this._currencyAPIService.getAllCurrencies().subscribe(res => {
      this.currencyList = res.entities;
    }, err => { console.log(err) });
  }

  fetchAvailableCurrencies() {
    this._currencyAPIService.getAvailableCurrencies().subscribe(res => {
      this.availableCurrencyList = res.entity as ExchangeRate;
      this.availableDate = res.entity?.resourceDeclaredUpdateDateTime as Date;
      console.log(res);
    }, err => { console.log(err) });
  }

  trackByFn(index: number) {
    return index;
  }
}
