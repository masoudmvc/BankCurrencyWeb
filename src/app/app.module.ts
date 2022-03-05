import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArrayToLinePipe } from './shared/pipes/array-to-line.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConverttComponent } from './components/convertt/convertt.component';

@NgModule({
  declarations: [
    ArrayToLinePipe,
    AppComponent,
    HomeComponent,
    CurrencyListComponent,
    WithdrawComponent,
    ConverttComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
