import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesFacade, ProductsFacade } from '@products/core-state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '@products/core-data';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'products-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  selectedProduct$ = this.productsFacade.selectedProduct$;
  categories$ = this.categoriesFacade.allCategories$;
  products$ = this.productsFacade.allProducts$;

  unsubscribe$ = new Subject();
  form: FormGroup;
  selectedId;

  constructor(
    private productsFacade: ProductsFacade,
    private categoriesFacade: CategoriesFacade,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.initForm();
    this.productsFacade.loadProducts();
    this.categoriesFacade.loadCategories();

    this.route.queryParams.pipe(
      map(params => {
        const paramId = params ? params['id'] : null;
        this.productsFacade.selectProduct(paramId);
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  select(product) {
    this.form.patchValue(product);
    this.router.navigate(['/products'], { queryParams: { id: product.id } });
    this.productsFacade.selectProduct(product.id);
  }

  save(product: Product) {
    const { id, ...trimmedProduct } = product;
    product.id ? this.productsFacade.updateProduct(product) : this.productsFacade.createProduct(trimmedProduct as Product);
    this.reset();
  }

  delete(product: Product) {
    this.productsFacade.deleteProduct(product);
    this.reset();
  }

  reset() {
    this.form.reset();
    this.router.navigate(
      ['.'],
      { relativeTo: this.route, queryParams: {} }
    );
    this.productsFacade.selectProduct(null);
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }

  private initForm() {
    this.form = this.fb.group({
      id: null,
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: null,
      quantityInStock: [''],
    })
  }
}
