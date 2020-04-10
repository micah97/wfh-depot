import { createReducer, on, Action } from '@ngrx/store';
import { Product } from '@products/core-data';
import * as ProductsActions from './products.actions';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductsState extends EntityState<Product> {
  productId?: string;
  loaded: boolean;
  error?: string | null;
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<
  Product
> = createEntityAdapter<Product>();

export const initialProductsState: ProductsState = productsAdapter.getInitialState({
  loaded: false
});

const _productsReducer = createReducer(
  initialProductsState,
  on(
    ProductsActions.selectedProduct, (state, { productId }) =>
    Object.assign({}, state, { productId })
  ),
  on(ProductsActions.loadProducts, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(
    ProductsActions.loadProductsSuccess,
    (state, { products }) =>
    productsAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(
    ProductsActions.loadProductsFailure,
    (state, { error }) => ({
    ...state,
    error
    })),
  on(ProductsActions.createProductSuccess, (state, { product }) =>
    productsAdapter.addOne(product, state)
  ),
  on(ProductsActions.createProductFailure, (state, { error }) => ({
    ...state,
    error
  })),
  // Update a product
  on(ProductsActions.updateProductSuccess, (state, { product }) =>
    productsAdapter.updateOne({ id: product.id, changes: product }, state)
  ),
  on(ProductsActions.updateProductFailure, (state, { error }) => ({
    ...state,
    error
  })),
  // Delete a product
  on(ProductsActions.deleteProductSuccess, (state, { product }) =>
    productsAdapter.removeOne(product.id, state)
  ),
  on(ProductsActions.deleteProductFailure, (state, { error }) => ({
    ...state,
    error
  })),
);


export function productsReducer(state: ProductsState | undefined, action: Action) {
  return _productsReducer(state, action);
}
