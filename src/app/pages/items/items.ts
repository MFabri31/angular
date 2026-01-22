import { Component, signal } from '@angular/core';
import type { Item } from '../../interfaces/character-interface';
import { ItemList } from '../../components/itemList/item-list/item-list';

@Component({
  selector: 'item-page',
  templateUrl: './items.html',
  imports: [ItemList],
})
export class ItemsPage {
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
}
