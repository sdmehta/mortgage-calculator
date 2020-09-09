import { CalculatorService } from './calculator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SummaryComponent } from './summary/summary.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    InputNumberModule,
    SliderModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
