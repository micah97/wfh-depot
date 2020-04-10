// Products
export * from './products/products.actions';
export * from './products/products.facade';
export { ProductsState, productsReducer } from './products/products.reducer';
export { getAllProducts, getSelectedProduct } from './products/products.selectors';

import * as fromProducts from './products/products.reducer';

// Categories
export * from './categories/categories.actions';
export * from './categories/categories.facade';
export { CategoriesState, categoriesReducer } from './categories/categories.reducer';
export { getAllCategories, getSelectedCategory } from './categories/categories.selectors';

import * as fromCategories from './categories/categories.reducer';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  [fromProducts.PRODUCTS_FEATURE_KEY]: fromProducts.ProductsState;
  [fromCategories.CATEGORIES_FEATURE_KEY]: fromCategories.CategoriesState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromProducts.PRODUCTS_FEATURE_KEY]: fromProducts.productsReducer,
  [fromCategories.CATEGORIES_FEATURE_KEY]: fromCategories.categoriesReducer,
}
