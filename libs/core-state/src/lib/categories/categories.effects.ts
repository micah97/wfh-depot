import { CategoriesService, DeleteDialogService } from '@products/core-data';
import { Injectable } from '@angular/core';
import * as CategoriesActions from './categories.actions';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map, switchMap } from 'rxjs/operators';
import { iif, of } from 'rxjs';

@Injectable()
export class CategoriesEffects {
  @Effect() loadCategories$ = this.actions$.pipe(
    ofType(CategoriesActions.loadCategories),
    fetch({
      run: (action) => this.categoriesService.all().pipe(
        map((categories) => CategoriesActions.loadCategoriesSuccess({ categories }))
      ),
      onError: (action, error) => CategoriesActions.loadCategoriesFailure({ error })
    })
  );

  @Effect() createCategory$ = this.actions$.pipe(
    ofType(CategoriesActions.createCategory),
    fetch({
      run: (action) => this.categoriesService.create(action.category).pipe(
        map((category) => CategoriesActions.createCategorySuccess({ category }))
      ),
      onError: (action, error) => CategoriesActions.createCategoryFailure({ error })
    })
  );

  @Effect() updateCategory$ = this.actions$.pipe(
    ofType(CategoriesActions.updateCategory),
    fetch({
      run: (action) => this.categoriesService.update(action.category).pipe(
        map((category) => CategoriesActions.updateCategorySuccess({ category }))
      ),
      onError: (action, error) => CategoriesActions.updateCategoryFailure({ error })
    })
  );

  @Effect() deleteCategory$ = this.actions$.pipe(
    ofType(CategoriesActions.deleteCategory),
    pessimisticUpdate({
      run: (action) => this.deleteDialogService.deleteDialog(action.category).pipe(
        switchMap((confirmedDelete: boolean) =>
          iif(() => confirmedDelete,
            this.categoriesService.delete(action.category.id.toString()).pipe(
              map((category) => CategoriesActions.deleteCategorySuccess({ category })),
            ),
            of(CategoriesActions.deleteCategoryCancelled())
          )
        )
      ),
      onError: (action, error) => CategoriesActions.deleteCategoryFailure({ error })
    })
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private deleteDialogService: DeleteDialogService
    ) {}
}
