import { Component, input } from '@angular/core';
import type { Item } from '../../../interfaces/character-interface';

@Component({
  selector: 'item-list',
  imports: [],
  templateUrl: './item-list.html',
})
export class ItemList {
  items = input.required<Item[]>();
}
