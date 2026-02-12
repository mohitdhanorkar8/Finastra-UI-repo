import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { QUICK_ACCESS_ITEMS, QuickAccessItem } from './quick-access.mock';



@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [ CommonModule ,MatGridListModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.css'
})
export class QuickAccessComponent {
    quickAccessItems: QuickAccessItem[] = QUICK_ACCESS_ITEMS;
}