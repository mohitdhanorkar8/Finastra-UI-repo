import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCard } from "@angular/material/card";


@Component({
  selector: 'app-limits',
  standalone: true,
  imports: [MatProgressBarModule, MatCard],
  templateUrl: './limits.component.html',
  styleUrl: './limits.component.css'
})
export class LimitsComponent {

}
