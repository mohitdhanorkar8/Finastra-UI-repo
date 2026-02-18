import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { QuickAccessComponent } from '../components/quick-access/quick-access.component';
import { LimitsComponent } from '../components/limits/limits.component';
import { AccountsComponent } from '../components/accounts/accounts.component';
import { AccountBalanceComponent } from '../components/account-balance/account-balance.component';
import { OngoingTasksComponent } from '../components/ongoing-tasks/ongoing-tasks.component';
import { CalenderComponent } from '../components/calender/calender.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    CommonModule,
    // MatGridListModule,
    // QuickAccessComponent,
    // LimitsComponent,
    // AccountsComponent,
    // AccountBalanceComponent,
    // OngoingTasksComponent,
    // CalenderComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finastra-ui';

  showChat = false;
  showNotifications = false;
  showSearch = false;
  searchText = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }

  toggleSearch(event: Event) {
    event.stopPropagation();
    this.showSearch = !this.showSearch;
  }
  
  closeSearch() {
    this.showSearch = false;
  }

  closeAllPopups() {
    this.showSearch = false;
    this.showChat = false;
    this.showNotifications = false;
  }

  onChatClick(event: MouseEvent) {
    event.stopPropagation();
    const wasOpen = this.showChat;
    this.closeAllPopups();
    this.showChat = !wasOpen;
  }

  onNotificationClick(event: MouseEvent) {
    event.stopPropagation();
    const wasOpen = this.showNotifications;
    this.closeAllPopups();
    this.showNotifications = !wasOpen;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.closeAllPopups();
  }

}
