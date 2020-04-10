import { CategoriesEffects } from './categories/categories.effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products/products.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../../apps/client/src/environments/environment.prod';
import { CategoriesFacade } from './categories/categories.facade';
import { ProductsFacade } from './products/products.facade';
import { NgModule } from '@angular/core';
import { reducers } from '.';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProductsEffects,
      CategoriesEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, })
  ],
  providers: [
    ProductsFacade,
    CategoriesFacade
  ]
})
export class CoreStateModule {}
