import { Injectable } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import * as ProductsSelectors from './products.selectors';
import * as ProductsActions from './products.actions';
import * as fromProducts from './products.reducer';
import { Product } from '@products/core-data';

@Injectable()
export class ProductsFacade {
  loaded$ = this.store.pipe(select(ProductsSelectors.getProductsLoaded));
  selectedId$ = this.store.pipe(select(ProductsSelectors.getSelectedId));
  allProducts$ = this.store.pipe(select(ProductsSelectors.getAllProducts));
  selectedProduct$ = this.store.pipe(select(ProductsSelectors.getSelectedProduct));

  constructor(private store: Store<fromProducts.ProductsPartialState>) { }

  selectProduct(productId: string) {
    this.dispatch(ProductsActions.selectedProduct({ productId }));
  }

  loadProducts() {
    this.dispatch(ProductsActions.loadProducts());
  }

  createProduct(product: Product) {
    this.dispatch(ProductsActions.createProduct({ product }));
  }

  updateProduct(product: Product) {
    this.dispatch(ProductsActions.updateProduct({ product }));
  }

  deleteProduct(product: Product) {
    this.dispatch(ProductsActions.deleteProduct({ product }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
