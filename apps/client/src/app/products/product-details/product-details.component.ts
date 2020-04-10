import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product, Category } from '@products/core-data';

@Component({
  selector: 'products-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  selectedProduct: Product;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Input() form: FormGroup;
  @Input() categories: Category[];
  @Input() set product(value: Product) {
    this.selectedProduct = { ...value }
    this.form.patchValue(this.selectedProduct);
  }
}
