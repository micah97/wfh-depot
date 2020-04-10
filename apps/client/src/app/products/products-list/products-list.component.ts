import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsFacade } from '@products/core-state';
import { Product } from '@products/core-data';

@Component({
  selector: 'products-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() products: Product[];
  @Output() selected = new EventEmitter();

  selectedId$ = this.productsFacade.selectedId$;

  constructor(private productsFacade: ProductsFacade) {}

  ProductTypeIsMonitor(category): boolean {
    return category.name === 'Monitors' ? true : false;
  }

  selectProduct(product) {
    this.selected.emit(product);
  }
}
