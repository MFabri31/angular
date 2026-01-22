import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.html',
  imports: [UpperCasePipe],
})
export class HeroComponent {
  title = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    return `${this.title()} - ${this.age()}`;
  });

  getHeroDescription() {
    return `${this.title()} - ${this.age()}`;
  }

  changeHero() {
    this.title.set('Peter');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  reset() {
    this.title.set('Ironman');
    this.age.set(45);
  }
}
