import { Component, OnInit } from '@angular/core';
import { CategoriesFacade } from '@products/core-state';
import { Category, Product } from '@products/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'products-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  form: FormGroup;
  categories$ = this.categoriesFacade.allCategories$;
  selectedCategory$ = this.categoriesFacade.selectedCategory$;

  constructor(
    private categoriesFacade: CategoriesFacade,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();
    this.categoriesFacade.loadCategories();
  }

  select(category: Category) {
    this.form.patchValue(category);
    this.categoriesFacade.selectCategory(category.id);
  }

  selectProduct(product: Product) {
    this.router.navigate(['/products'], { queryParams: { id: product.id } });
  }

  save(category: Category) {
    const { id, ...trimmedCategory } = category;
    category.id ? this.categoriesFacade.updateCategory(category) : this.categoriesFacade.createCategory(trimmedCategory as Category);
    this.reset();
  }

  delete(category: Category) {
    category.products.length ? this.invalidDeleteError() : this.categoriesFacade.deleteCategory(category);
    this.reset();
  }

  invalidDeleteError() {
    this.snackBar.open('You cannot delete a category that has products', '', { duration: 6000 })
  }

  reset() {
    this.form.reset();
    this.categoriesFacade.selectCategory(null);
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: null,
      name: ['', Validators.required]
    });
  }
}
