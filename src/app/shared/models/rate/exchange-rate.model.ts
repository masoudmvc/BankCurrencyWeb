import { Data } from "@angular/router";
import { ExchangeRateDetail } from "./exchange-rate-detail.model";

export interface ExchangeRate {
  key?: string;
  resourceDeclaredUpdateDateTime?: Data;
  exchangeRateResourceName?: string;
  exchangeRateDetails?: ExchangeRateDetail[];
}
