import { Product } from '@products/core-data';
import { createAction, props } from '@ngrx/store';

// Select Product
export const selectedProduct = createAction(
  '[Product] Selected Product',
  props<{ productId: string }>()
);

// Load Products
export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);

// Load Product
export const loadProduct = createAction(
  '[Products] Load Product',
  props<{ productId: string }>()
);

export const loadProductSuccess = createAction(
  '[Products] Load Product Success',
  props<{ product: Product }>()
);

export const loadProductFailure = createAction(
  '[Products] Load Product Failure',
  props<{ error: any }>()
);

// Create Product
export const createProduct = createAction(
  '[Products] Create Product',
  props<{ product: Product }>()
);

export const createProductSuccess = createAction(
  '[Products] Create Product Success',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Products] Create Product Failure',
  props<{ error: any }>()
);

// Update Product
export const updateProduct = createAction(
  '[Products] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Products] Update Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Products] Update Product Failure',
  props<{ error: any }>()
);

// Delete Product
export const deleteProduct = createAction(
  '[Products] Delete Product',
  props<{ product: Product }>()
);

export const deleteProductCancelled = createAction('[Products] Delete Product Cancelled');

export const deleteProductSuccess = createAction(
  '[Products] Delete Product Success',
  props<{ product: Product }>()
);

export const deleteProductFailure = createAction(
  '[Products] Delete Product Failure',
  props<{ error: any }>()
);
