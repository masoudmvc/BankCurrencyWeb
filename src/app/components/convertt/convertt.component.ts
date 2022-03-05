import { Convertt } from './../../shared/models/rate/convert.model';
import { Component, OnInit } from '@angular/core';
import { RateAPIService } from 'src/app/shared/api-services/rate-api.service';

@Component({
  selector: 'app-convertt',
  templateUrl: './convertt.component.html',
  styleUrls: ['./convertt.component.css']
})
export class ConverttComponent implements OnInit {

  fromCurrency: string = "";
  toCurrency: string = "";
  amount?: number;
  calculated: boolean = false;
  exchangerate?: number = 0;
  resultAmount?: number = 0;

  constructor(private _rateAPIService: RateAPIService) { }

  convert() {
    if(!this.amount || !this.fromCurrency || !this.toCurrency) {
      alert("please provide all fields!");
      return;
    }

    this._rateAPIService.Convertt({
      amount: this.amount,
      fromCurrency: this.fromCurrency,
      toCurrency: this.toCurrency})
      .subscribe(res => {
        if((res as any).ErrorMessage) {
          alert((res as any).ErrorMessage)
        } else {
          this.calculated = true;
          this.exchangerate = res.exchangeRate;
          this.resultAmount = res.convertedAmount;
          console.log(res);
        }
    }, err => { alert(err.errorMessage) })
  }

  ngOnInit(): void {
  }

  clear() {
    this.fromCurrency = "";
    this.toCurrency = "";
    this.amount = undefined;
    this.calculated = false;
    this.exchangerate = 0;
    this.resultAmount = 0;
  }

}
