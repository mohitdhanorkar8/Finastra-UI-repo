import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACCOUNT_BALANCES_MOCK, AccountBalance } from './account-balance.mock';

@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent {
  balances: AccountBalance[] = ACCOUNT_BALANCES_MOCK;
}
