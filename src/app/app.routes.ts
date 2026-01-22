import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';
import { CounterComponent } from './pages/counter/counter';
import { ErrorPage } from './pages/errorPage/error-page';
import { ItemsPage } from './pages/items/items';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '/counter',
    component: CounterComponent,
  },
  {
    path: '/items',
    component: ItemsPage,
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  //    component: ErrorPage,
  // },
];
