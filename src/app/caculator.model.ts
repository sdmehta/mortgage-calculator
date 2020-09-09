export class CalculatorModel {

    mortgageAmount: number;
    interestRate: number;
    amortizationYears: number;
    amortizationMonths: number;
    paymentFrequency: number;
    term: number;

    prepaymentAmount: number;
    prepaymentFrequency: number;
    startWithPayment: number;

    constructor() {
        this.mortgageAmount = 100000;
        this.interestRate = 5;
        this.amortizationYears = 25;
        this.amortizationMonths = 0;
        this.paymentFrequency = 6;
        this.term = 5;

        this.prepaymentAmount = 0.00;
        this.prepaymentFrequency = 1;
        this.startWithPayment = 1;
    }

}
