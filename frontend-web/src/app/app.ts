import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Billboard } from './billboard/billboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Billboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend-web');
}
