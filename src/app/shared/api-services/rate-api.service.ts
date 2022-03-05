import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { ListQueryResult } from '../models/base/list-query-result.model';
import { Withdraw } from '../models/rate/withdraw.model';
import { Convertt } from '../models/rate/convert.model';
import { WithdrawCommand } from '../models/rate/withdraw-command.model';
import { ConvertCommand } from '../models/rate/convert-command.model';

@Injectable({providedIn: 'root'})
export class RateAPIService {

  constructor(private http: HttpClient) { }

  Convertt(param: ConvertCommand) : Observable<Convertt> {
    const url = `${environment.baseUrl}/Rate/convert`;
    return this.http.post<Convertt>(url, param);
  }

  Withdraw(param: WithdrawCommand) : Observable<Withdraw> {
    const url = `${environment.baseUrl}/Rate/withdraw-money`;
    return this.http.post<Withdraw>(url, param);
  }
}
