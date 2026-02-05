import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.css'
})
export class QuickAccessComponent {

}
