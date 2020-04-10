import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRODUCTS_FEATURE_KEY,
  ProductsState,
  ProductsPartialState,
  productsAdapter
} from './products.reducer';

export const getProductsState = createFeatureSelector<
  ProductsPartialState,
  ProductsState
>(PRODUCTS_FEATURE_KEY);

const { selectAll, selectEntities } = productsAdapter.getSelectors();

export const getProductsLoaded = createSelector(
  getProductsState,
  (state: ProductsState) => state.loaded
);

export const getProductsError = createSelector(
  getProductsState,
  (state: ProductsState) => state.error
);

export const getAllProducts = createSelector(
  getProductsState,
  (state: ProductsState) => selectAll(state)
);

export const getProductsEntities = createSelector(
  getProductsState,
  (state: ProductsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getProductsState,
  (state: ProductsState) => state.productId
);

export const getSelectedProduct = createSelector(
  getProductsEntities,
  getSelectedId,
  (entities, productId) => productId && entities[productId]
);
