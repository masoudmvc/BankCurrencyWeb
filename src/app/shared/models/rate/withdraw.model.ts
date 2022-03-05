export interface Withdraw {
  amount?: number;
  currencyOfTheCountryWhereYouAre?: string;
  currencyOfYourCountry?: string;
  exchangeRate?: number;
  moneyWithdrawnFromYourAccount?: number;
}
