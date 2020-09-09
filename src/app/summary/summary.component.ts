import { SummaryModel } from '../summary.model';
import { CalculatorService } from '../calculator.service';
import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { CalculatorModel } from '../caculator.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit, OnChanges {
  @Input()
  model: CalculatorModel;

  @Input()
  trigger: boolean;

  termSummary: SummaryModel;
  mortizationSummary: SummaryModel;
  rows = [];

  constructor(private service: CalculatorService) { }

  ngOnChanges(): void {
    this.calculateMortgage();
  }

  ngOnInit(): void {
  }

  calculateMortgage(): void {
    this.termSummary = this.service.getTermSummary(this.model);
    this.mortizationSummary = this.service.getMortizationSummary(this.model);

    this.rows[0] = {
      category: 'Number of Payments',
      term: this.termSummary.numberOfPayments,
      amortizationPeriod: this.mortizationSummary.numberOfPayments
    };
    this.rows[1] = {
      category: 'Mortgage Payment',
      term: this.termSummary.mortgagePayment,
      amortizationPeriod: this.mortizationSummary.mortgagePayment
    };
    this.rows[2] = {
      category: 'Prepayment',
      term: this.termSummary.prepayment,
      amortizationPeriod: this.mortizationSummary.prepayment
    };
    this.rows[3] = {
      category: 'Principal Payments',
      term: this.termSummary.principalPayments,
      amortizationPeriod: this.mortizationSummary.principalPayments
    };
    this.rows[4] = {
      category: 'Interest Payments',
      term: this.termSummary.interestPayments,
      amortizationPeriod: this.mortizationSummary.interestPayments
    };
    this.rows[5] = {
      category: 'Total Cost',
      term: this.termSummary.totalCost,
      amortizationPeriod: this.mortizationSummary.totalCost
    };
  }
}
