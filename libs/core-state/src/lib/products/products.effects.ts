import { ProductsService, DeleteDialogService } from '@products/core-data';
import { Injectable } from '@angular/core';
import * as ProductsActions from './products.actions';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map, switchMap } from 'rxjs/operators';
import { iif, of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  @Effect() loadProducts$ = this.actions$.pipe(
    ofType(ProductsActions.loadProducts),
    fetch({
      run: (action) => this.productsService.all().pipe(
        map((products) => ProductsActions.loadProductsSuccess({ products }))
      ),
      onError: (action, error) => ProductsActions.loadProductsFailure({ error })
    })
  );

  @Effect() createProduct$ = this.actions$.pipe(
    ofType(ProductsActions.createProduct),
    fetch({
      run: (action) => this.productsService.create(action.product).pipe(
        map((product) => ProductsActions.createProductSuccess({ product }))
      ),
      onError: (action, error) => ProductsActions.createProductFailure({ error })
    })
  );

  @Effect() updateProduct$ = this.actions$.pipe(
    ofType(ProductsActions.updateProduct),
    fetch({
      run: (action) => this.productsService.update(action.product).pipe(
        map((product) => ProductsActions.updateProductSuccess({ product }))
      ),
      onError: (action, error) => ProductsActions.updateProductFailure({ error })
    })
  );

  @Effect() deleteProduct$ = this.actions$.pipe(
    ofType(ProductsActions.deleteProduct),
    pessimisticUpdate({
      run: (action) => this.deleteDialogService.deleteDialog(action.product).pipe(
        switchMap((confirmedDelete: boolean) =>
          iif(() => confirmedDelete,
            this.productsService.delete(action.product.id).pipe(
              map((product) => ProductsActions.deleteProductSuccess({ product })),
            ),
            of(ProductsActions.deleteProductCancelled())
          )
        )
      ),
      onError: (action, error) => ProductsActions.deleteProductFailure({ error })
    })
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private deleteDialogService: DeleteDialogService
    ) {}
}
