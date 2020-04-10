import { createReducer, on, Action } from '@ngrx/store';
import { Category } from '@products/core-data';
import * as CategoriesActions from './categories.actions';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export const CATEGORIES_FEATURE_KEY = 'categories';

export interface CategoriesState extends EntityState<Category> {
  categoryId?: string;
  loaded: boolean;
  error?: string | null;
}

export interface CategoriesPartialState {
  readonly [CATEGORIES_FEATURE_KEY]: CategoriesState;
}

export const categoriesAdapter: EntityAdapter<
  Category
> = createEntityAdapter<Category>();

export const initialCategoriesState: CategoriesState = categoriesAdapter.getInitialState({
  loaded: false
});

const _categoriesReducer = createReducer(
  initialCategoriesState,
  on(
    CategoriesActions.selectedCategory, (state, { categoryId }) =>
    Object.assign({}, state, { categoryId })
  ),
  on(CategoriesActions.loadCategories, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(
    CategoriesActions.loadCategoriesSuccess,
    (state, { categories }) =>
    categoriesAdapter.setAll(categories, { ...state, loaded: true })
  ),
  on(
    CategoriesActions.loadCategoriesFailure,
    (state, { error }) => ({
    ...state,
    error
    })),
  on(CategoriesActions.createCategorySuccess, (state, { category }) =>
    categoriesAdapter.addOne(category, state)
  ),
  on(CategoriesActions.createCategoryFailure, (state, { error }) => ({
    ...state,
    error
  })),
  // Update a category
  on(CategoriesActions.updateCategorySuccess, (state, { category }) =>
    categoriesAdapter.updateOne({ id: category.id, changes: category }, state)
  ),
  on(CategoriesActions.updateCategoryFailure, (state, { error }) => ({
    ...state,
    error
  })),
  // Delete a category
  on(CategoriesActions.deleteCategorySuccess, (state, { category }) =>
    categoriesAdapter.removeOne(category.id, state)
  ),
  on(CategoriesActions.deleteCategoryFailure, (state, { error }) => ({
    ...state,
    error
  })),
);


export function categoriesReducer(state: CategoriesState | undefined, action: Action) {
  return _categoriesReducer(state, action);
}
