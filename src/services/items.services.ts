import { effect, Injectable, signal } from '@angular/core';
import { Item } from '../app/interfaces/character-interface';

const loadFromLocalStorage = (): Item[] => {
  const items = localStorage.getItem('items');
  return items ? JSON.parse(items) : [];
};

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  title = signal('');
  description = signal('');
  isAvailable = signal(false);

  items = signal<Item[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('items', JSON.stringify(this.items()));
  });

  resetForm() {
    this.title.set('');
    this.description.set('');
  }

  addCharacter(): void {
    if (this.title().trim() === '' || this.description().trim() === '') {
      alert('Complete all fields!');
      this.resetForm();
      return;
    }
    this.items.update((items: Item[]) => [
      ...items,
      {
        id: this.items.length + 1,
        title: this.title(),
        description: this.description(),
        isAvailable: this.isAvailable(),
      },
    ]);

    this.resetForm();
  }

  deleteItem(id: number): void {
    let confirmDelete = confirm('Are you sure you want to delete this item?');

    if (!confirmDelete) {
      return;
    } else {
      this.items.update((items) => items.filter((item) => item.id !== id));
    }
  }
}
