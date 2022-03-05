import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverttComponent } from './components/convertt/convertt.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { HomeComponent } from './components/home/home.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: CurrencyListComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'convert', component: ConverttComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
