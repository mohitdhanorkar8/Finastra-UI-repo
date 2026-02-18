import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatMenu } from '@angular/material/menu';
import { QuickAccessComponent } from "src/components/quick-access/quick-access.component";
import { LimitsComponent } from "src/components/limits/limits.component";
import { AccountsComponent } from "src/components/accounts/accounts.component";
import { AccountBalanceComponent } from "src/components/account-balance/account-balance.component";
import { OngoingTasksComponent } from "src/components/ongoing-tasks/ongoing-tasks.component";
import { CalenderComponent } from "src/components/calender/calender.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ MatGridListModule, MatDividerModule, QuickAccessComponent, LimitsComponent, AccountsComponent, AccountBalanceComponent, OngoingTasksComponent, CalenderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
