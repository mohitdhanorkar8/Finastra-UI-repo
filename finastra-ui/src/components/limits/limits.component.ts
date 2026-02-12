import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCard } from "@angular/material/card";
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { LimitItem, LIMITS_MOCK } from './limits.mock';


@Component({
  selector: 'app-limits',
  standalone: true,
  imports: [MatProgressBarModule, MatCard, MatIconButton, MatIcon, CommonModule],
  templateUrl: './limits.component.html',
  styleUrl: './limits.component.css'
})
export class LimitsComponent {

    limits: LimitItem[] = LIMITS_MOCK;


}
