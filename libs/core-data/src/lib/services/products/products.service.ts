import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Product } from '../../models/store.models';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { productsQuery, createProductMutation, updateProductMutation, deleteProductMutation } from './products.graphql';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private apollo: Apollo
    ) { }

  all(): Observable<Product[]> {
    return this.apollo.query({
      query: productsQuery
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.product)
    );
  }

  create(product: Product): Observable<Product> {
    return this.apollo.mutate({
      mutation: createProductMutation,
      variables: {
        product
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.insert_product.returning[0])
    );
  }

  update(product: Product): Observable<Product> {
    return this.apollo.mutate({
      mutation: updateProductMutation,
      variables: {
        id: product.id.toString(),
        product
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.update_product.returning[0])
    );
  }

  delete(id: string): Observable<Product> {
    return this.apollo.mutate({
      mutation: deleteProductMutation,
      variables: {
        id,
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.delete_product.returning[0])
    );
  }
}
