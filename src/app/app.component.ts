import { Component } from '@angular/core';
import { CalculatorModel } from './caculator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'mortgage-calculator';
  calculatorModel: CalculatorModel;
  trigger = true;

  constructor() {
    this.calculatorModel = new CalculatorModel();
  }

  onModelChange(model: any): void {
    this.trigger = !this.trigger;
  }
}
