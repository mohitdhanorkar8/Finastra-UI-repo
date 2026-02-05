import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { QuickAccessComponent } from '../components/quick-access/quick-access.component';
import { LimitsComponent } from '../components/limits/limits.component';
import { AccountsComponent } from '../components/accounts/accounts.component';
import { AccountBalanceComponent } from '../components/account-balance/account-balance.component';
import { OngoingTasksComponent } from '../components/ongoing-tasks/ongoing-tasks.component';
import { CalenderComponent } from '../components/calender/calender.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatGridListModule,
    QuickAccessComponent,
    LimitsComponent,
    AccountsComponent,
    AccountBalanceComponent, 
    OngoingTasksComponent,
    CalenderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finastra-ui';
}
