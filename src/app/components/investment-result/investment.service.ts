import { Injectable } from "@angular/core";
import { Investment } from "../user-input/InvestmentsModel";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    resultData?: Investment[];

    calculateInvestmentResults(initialInvestment: number, duration: number, expectedReturn: number, annualInvestment: number) {
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        this.resultData = annualData
    }

}