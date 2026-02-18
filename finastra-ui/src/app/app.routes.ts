import { Routes } from '@angular/router';
import { CashComponent } from 'src/components/nav-components/cash/cash.component';
import { DashboardComponent } from 'src/components/nav-components/dashboard/dashboard.component';
import { LandingComponent } from 'src/components/nav-components/landing/landing.component';
import { SupplyChainFinanceComponent } from 'src/components/nav-components/supply-chain-finance/supply-chain-finance.component';
import { TradeComponent } from 'src/components/nav-components/trade/trade.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trade', component: TradeComponent },
  { path: 'cash', component: CashComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'supply-chain-finance', component: SupplyChainFinanceComponent }
];
