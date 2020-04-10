import { Injectable } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import * as CategoriesSelectors from './categories.selectors';
import * as CategoriesActions from './categories.actions';
import * as fromCategories from './categories.reducer';
import { Category } from '@products/core-data';

@Injectable()
export class CategoriesFacade {
  loaded$ = this.store.pipe(select(CategoriesSelectors.getCategoriesLoaded));
  allCategories$ = this.store.pipe(select(CategoriesSelectors.getAllCategories));
  selectedCategory$ = this.store.pipe(select(CategoriesSelectors.getSelectedCategory));
  selectedId$ = this.store.pipe(select(CategoriesSelectors.getSelectedId));

  constructor(private store: Store<fromCategories.CategoriesPartialState>) { }

  selectCategory(categoryId: string) {
    this.dispatch(CategoriesActions.selectedCategory({ categoryId }));
  }

  loadCategories() {
    this.dispatch(CategoriesActions.loadCategories());
  }

  createCategory(category: Category) {
    this.dispatch(CategoriesActions.createCategory({ category }));
  }

  updateCategory(category: Category) {
    this.dispatch(CategoriesActions.updateCategory({ category }));
  }

  deleteCategory(category: Category) {
    this.dispatch(CategoriesActions.deleteCategory({ category }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
