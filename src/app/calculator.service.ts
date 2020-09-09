import { Injectable } from '@angular/core';

import { CalculatorModel } from './caculator.model';
import { SummaryModel } from './summary.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateMonthlyPayment(model: CalculatorModel): number {
    const step1 = model.mortgageAmount;
    const step2 = model.amortizationYears;
    const step3 = model.interestRate;
    const step4 = step3 / 100;
    const step5 = step2 * 12;
    const step6 = step4 / 2;
    const step7 = step6 + 1;
    const step8 = Math.pow(step7, 0.166666666);
    const step9 = step8 - 1;
    const step10 = step9 + 1;
    const step11 = Math.pow(step10, step5);
    const step12 = step1 * step9 * step11;
    const step13 = step11 - 1;
    const m = step12 / step13;
    return m;
  }

  calculatePayment(model: CalculatorModel): number {
    const m = this.calculateMonthlyPayment(model);

    switch (Number(model.paymentFrequency)) {
      case 1: {
        return (m / 4);
      }
      case 2: {
        return (m * 12) / 52;
      }
      case 3: {
        return (m / 2);
      }
      case 4: {
        return (m * 12) / 26;
      }
      case 5:
        return (m / 2);

      case 6:
        return m;
    }
  }

  getTermSummary(cModel: CalculatorModel): SummaryModel {
    const sModel = new SummaryModel();
    sModel.numberOfPayments = cModel.term * this.getNumPayments(cModel.paymentFrequency);
    sModel.mortgagePayment = this.calculatePayment(cModel);
    sModel.prepayment = cModel.prepaymentAmount;
    sModel.totalCost = sModel.numberOfPayments * sModel.mortgagePayment;
    sModel.principalPayments = sModel.totalCost / 3;
    sModel.interestPayments = sModel.totalCost * 2 / 3;
    return sModel;
  }

  getMortizationSummary(cModel: CalculatorModel): SummaryModel {
    const sModel = new SummaryModel();
    sModel.numberOfPayments = (Number(cModel.amortizationYears)
      + Number(cModel.amortizationMonths) / 12) * this.getNumPayments(cModel.paymentFrequency);
    sModel.mortgagePayment = this.calculatePayment(cModel);
    sModel.prepayment = cModel.prepaymentAmount;
    sModel.principalPayments = cModel.mortgageAmount;
    sModel.totalCost = sModel.numberOfPayments * sModel.mortgagePayment;
    sModel.interestPayments = sModel.totalCost - sModel.principalPayments;
    return sModel;
  }

  getNumPayments(paymentFrequency): number {
    switch (Number(paymentFrequency)) {
      case 1: {
        return 52;
      }
      case 2: {
        return 52;
      }
      case 3: {
        return 26;
      }
      case 4: {
        return 26;
      }
      case 5:
        return 24;

      case 6:
        return 12;
    }
  }
}
