import { Component, inject, Input } from '@angular/core';
import { Investment } from '../user-input/InvestmentsModel';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService)
  get results() {
    return this.investmentService.resultData
  }
}
