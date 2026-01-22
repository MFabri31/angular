import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';
import { CounterComponent } from './pages/counter/counter';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '/counter',
    component: CounterComponent,
  },
];
