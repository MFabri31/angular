import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CounterComponent } from './pages/counter/counter';
import { HeroComponent } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { ErrorPage } from './pages/errorPage/error-page';
import { ItemsPage } from './pages/items/items';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    // CounterComponent,
    // HeroComponent,
    // Navbar,
    // ErrorPage
    ItemsPage,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-app');
}
