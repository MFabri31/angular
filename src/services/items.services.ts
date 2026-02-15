import { Injectable, signal } from '@angular/core';
import { Item } from '../app/interfaces/character-interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  title = signal('');
  description = signal('');
  isAvailable = signal(false);

  items = signal<Item[]>([
    {
      id: 1,
      title: 'Item 1',
      description: 'Description of item1',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description of item 2',
      isAvailable: true,
    },
  ]);

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
