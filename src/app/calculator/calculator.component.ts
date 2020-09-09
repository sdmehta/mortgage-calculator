import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { CalculatorModel } from '../caculator.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {

  @Input()
  model: CalculatorModel;

  @Output()
  modelChangeEvent = new EventEmitter();

  // form options
  amortizationYearsOptions = [];
  amortizationMonthsOptions = [];
  paymentFrequencyOptions = [];
  termOptions = [];
  prepaymentFrequencyOptions = [];

  paymentFrequencyLabel: string;
  mortgagePayment: number;

  constructor(private service: CalculatorService) {
    this.amortizationYearsOptions[0] = { value: 0, label: '0 Year' };
    this.amortizationYearsOptions[1] = { value: 1, label: '1 Year' };
    for (let i = 2; i <= 30; i++) {
      this.amortizationYearsOptions[i] = { value: i, label: i + ' Years' };
    }

    this.amortizationMonthsOptions[0] = { value: 0, label: '0 Month' };
    this.amortizationMonthsOptions[1] = { value: 1, label: '1 Month' };
    for (let i = 2; i <= 11; i++) {
      this.amortizationMonthsOptions[i] = { value: i, label: i + ' Months' };
    }

    this.paymentFrequencyOptions = [{ value: 1, label: 'Accelerated Weekly', shortLabel: 'Accelerated Weekly' },
    { value: 2, label: 'Weekly', shortLabel: 'Weekly' },
    { value: 3, label: 'Accelerated Bi-weekly', shortLabel: 'Accelerated Bi-weekly' },
    { value: 4, label: 'Bi-weekly (every 2 weeks)', shortLabel: 'Bi-weekly' },
    { value: 5, label: 'Semi-monthly (24x per year)', shortLabel: 'Semi-monthly' },
    { value: 6, label: 'Monthly (12x per year)', shortLabel: 'Monthly' }];

    this.termOptions[0] = { value: 1, label: '1 Year' };
    for (let i = 2; i <= 10; i++) {
      this.termOptions[i - 1] = { value: i, label: i + ' Years' };
    }

    this.prepaymentFrequencyOptions = [{ value: 1, label: 'One time' }, { value: 2, label: 'Each year' }, { value: 3, label: 'Same as regular payment' }];

    this.model = new CalculatorModel();
  }

  ngOnInit(): void {
    this.paymentFrequencyLabel = this.paymentFrequencyOptions.find(element => element.value === Number(this.model.paymentFrequency))
      .shortLabel;
    this.mortgagePayment = this.service.calculatePayment(this.model);
  }

  onModelChange(): void {
    this.paymentFrequencyLabel = this.paymentFrequencyOptions.find(element => element.value === Number(this.model.paymentFrequency))
      .shortLabel;
    this.mortgagePayment = this.service.calculatePayment(this.model);
    this.modelChangeEvent.emit(this.model);
  }
}
