import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Repositories } from './features/repositories/repositories';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Repositories],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-github-random');
}
