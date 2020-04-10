import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Category } from '@products/core-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'products-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent {
  selectedCategory: Category;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() selected = new EventEmitter();
  @Input() form: FormGroup;
  @Input() categories: Category[];
  @Input() set category(value: Category) {
    this.selectedCategory = { ...value };
    this.form.patchValue(this.selectedCategory);
  }
}
