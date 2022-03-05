import { Withdraw } from './../../shared/models/rate/withdraw.model';
import { Component, OnInit } from '@angular/core';
import * as forms from '@angular/forms';
import { RateAPIService } from 'src/app/shared/api-services/rate-api.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  currencyOfTheCountryWhereYouAre: string = "";
  currencyOfYourCountry: string = "";
  amount?: number;
  calculated: boolean = false;
  exchangerate?: number = 0;
  moneyWithdrawnFromYourAccount?: number = 0;

  constructor(private _rateAPIService: RateAPIService) { }

  ngOnInit(): void {
  }

  Withdraw() {
    if(!this.amount || !this.currencyOfTheCountryWhereYouAre || !this.currencyOfYourCountry) {
      alert("please provide all fields!");
      return;
    }

    this._rateAPIService.Withdraw({
      amount: this.amount,
      currencyOfTheCountryWhereYouAre: this.currencyOfTheCountryWhereYouAre,
      currencyOfYourCountry: this.currencyOfYourCountry})
      .subscribe(res => {
        if((res as any).ErrorMessage) {
          alert((res as any).ErrorMessage)
        } else {
          this.calculated = true;
          this.exchangerate = res.exchangeRate;
          this.moneyWithdrawnFromYourAccount = res.moneyWithdrawnFromYourAccount;
          console.log(res);
        }
    }, err => { alert(err.errorMessage) })
  }

  clear() {
    this.currencyOfTheCountryWhereYouAre = "";
    this.currencyOfYourCountry = "";
    this.amount = undefined;
    this.calculated = false;
    this.exchangerate = 0;
    this.moneyWithdrawnFromYourAccount = 0;
  }
}
