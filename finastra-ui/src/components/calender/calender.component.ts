import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-calender',
  standalone: true,
  host: { 'ngSkipHydration': '' },
  imports: [
    MatCard,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {
  selected = model<Date | null>(null);
}
