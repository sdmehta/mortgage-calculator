import { Component } from '@angular/core';
import { CalculatorModel } from './caculator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  calculatorModel: CalculatorModel;
  trigger = true;

  constructor() {
    this.calculatorModel = new CalculatorModel();
  }

  onModelChange(model: any): void {
    this.trigger = !this.trigger;
  }
}
