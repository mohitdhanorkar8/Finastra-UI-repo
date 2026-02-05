import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-ongoing-tasks',
  standalone: true,
  templateUrl: './ongoing-tasks.component.html',
  styleUrl: './ongoing-tasks.component.css',
  imports: [MatCard]
})
export class OngoingTasksComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const canvas = document.getElementById('ongoingTasksChart') as HTMLCanvasElement;

    if (!canvas) {
      console.error('Canvas not found');
      return;
    }

    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['In Progress', 'Completed', 'Pending'],
        datasets: [
          {
            data: [18, 32, 50],
            backgroundColor: ['#f59e0b', '#7c3aed', '#ec4899'],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}
