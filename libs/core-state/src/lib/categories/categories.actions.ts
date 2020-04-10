import { Category } from '@products/core-data';
import { createAction, props } from '@ngrx/store';

// Select Category
export const selectedCategory = createAction(
  '[Category] Selected Category',
  props<{ categoryId: string }>()
);

// Load Categories
export const loadCategories = createAction('[Categories] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[Categories] Load Categories Success',
  props<{ categories: Category[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Categories] Load Categories Failure',
  props<{ error: any }>()
);

// Load Category
export const loadCategory = createAction(
  '[Categories] Load Category',
  props<{ categoryId: string }>()
);

export const loadCategorySuccess = createAction(
  '[Categories] Load Category Success',
  props<{ category: Category }>()
);

export const loadCategoryFailure = createAction(
  '[Categories] Load Category Failure',
  props<{ error: any }>()
);

// Create Category
export const createCategory = createAction(
  '[Categories] Create Category',
  props<{ category: Category }>()
);

export const createCategorySuccess = createAction(
  '[Categories] Create Category Success',
  props<{ category: Category }>()
);

export const createCategoryFailure = createAction(
  '[Categories] Create Category Failure',
  props<{ error: any }>()
);

// Update Category
export const updateCategory = createAction(
  '[Categories] Update Category',
  props<{ category: Category }>()
);

export const updateCategorySuccess = createAction(
  '[Categories] Update Category Success',
  props<{ category: Category }>()
);

export const updateCategoryFailure = createAction(
  '[Categories] Update Category Failure',
  props<{ error: any }>()
);

// Delete Category
export const deleteCategory = createAction(
  '[Categories] Delete Category',
  props<{ category: Category }>()
);

export const deleteCategoryCancelled = createAction('[Categories] Delete Category Cancelled');

export const deleteCategorySuccess = createAction(
  '[Categories] Delete Category Success',
  props<{ category: Category }>()
);

export const deleteCategoryFailure = createAction(
  '[Categories] Delete Category Failure',
  props<{ error: any }>()
);
