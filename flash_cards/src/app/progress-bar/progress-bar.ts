import { Component, input } from '@angular/core';
import { Progressbar } from '../interfaces/progressbar';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
  progressBar = input.required<Progressbar>();

  get progressPercentage(): string {
    if (this.progressBar().total === 0) {
      return '0%';
    }
    const percentage = (this.progressBar().progress / this.progressBar().total) * 100;
    return `${percentage}%`;
  }

}
