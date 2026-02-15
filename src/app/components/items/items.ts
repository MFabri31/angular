import { Component, inject, signal } from '@angular/core';
import type { Item } from '../../interfaces/character-interface';
import { ItemList } from '../itemList/item-list/item-list';
import { ItemsService } from '../../../services/items.services';

@Component({
  selector: 'item-page',
  templateUrl: './items.html',
  imports: [ItemList],
})
export class ItemsPage {
  public itemsService = inject(ItemsService);
}
