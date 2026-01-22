import { Component } from '@angular/core';

@Component({
  selector: 'error-page',
  template: `{{ this.title }}`,
})
export class ErrorPage {
  title = 'Error 404 | Page Not Found';
}
