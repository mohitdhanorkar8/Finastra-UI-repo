import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCard } from "@angular/material/card";
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-limits',
  standalone: true,
  imports: [MatProgressBarModule, MatCard, MatIconButton, MatIcon],
  templateUrl: './limits.component.html',
  styleUrl: './limits.component.css'
})
export class LimitsComponent {

}
