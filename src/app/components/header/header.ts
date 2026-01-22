import { Component, signal } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.html',
})
export class HeaderComponent {
  protected readonly title = signal('my-app');
}
