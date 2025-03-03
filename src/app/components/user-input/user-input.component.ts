import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { calculateInvestmentResults } from '../../../investment-results';
import { Investment } from './InvestmentsModel';
import { InvestmentService } from '../investment-result/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredII = '0';
  enterdAI = '0';
  enterdER = '0';
  enteredD = '0';

  investmentService = inject(InvestmentService)
  onSubmit() {
    this.investmentService.calculateInvestmentResults(Number(this.enteredII),
      Number(this.enteredD),
      Number(this.enterdER),
      Number(this.enterdAI))

  }
}
