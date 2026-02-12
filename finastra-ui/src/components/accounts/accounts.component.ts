import { Component } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { AccountItem, ACCOUNTS_MOCK } from './accounts.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [MatCard, CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

    accounts: AccountItem[] = ACCOUNTS_MOCK;

}
