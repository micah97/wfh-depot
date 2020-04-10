import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CategoriesFacade } from '@products/core-state';
import { Category } from '@products/core-data';

@Component({
  selector: 'products-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  @Input() categories: Category[];
  @Output() selected = new EventEmitter();

  selectedId$ = this.categoriesFacade.selectedId$;

  constructor(private categoriesFacade: CategoriesFacade) { }

}
