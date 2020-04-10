import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CATEGORIES_FEATURE_KEY,
  CategoriesState,
  CategoriesPartialState,
  categoriesAdapter
} from './categories.reducer';

export const getCategoriesState = createFeatureSelector<
  CategoriesPartialState,
  CategoriesState
>(CATEGORIES_FEATURE_KEY);

const { selectAll, selectEntities } = categoriesAdapter.getSelectors();

export const getCategoriesLoaded = createSelector(
  getCategoriesState,
  (state: CategoriesState) => state.loaded
);

export const getCategoriesError = createSelector(
  getCategoriesState,
  (state: CategoriesState) => state.error
);

export const getAllCategories = createSelector(
  getCategoriesState,
  (state: CategoriesState) => selectAll(state)
);

export const getCategoriesEntities = createSelector(
  getCategoriesState,
  (state: CategoriesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCategoriesState,
  (state: CategoriesState) => state.categoryId
);

export const getSelectedCategory = createSelector(
  getCategoriesEntities,
  getSelectedId,
  (entities, categoryId) => categoryId && entities[categoryId]
);
