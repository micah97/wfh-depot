import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Category } from '../../models/store.models';
import { map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { categoriesQuery, createCategoryMutation, updateCategoryMutation, deleteCategoryMutation } from './categories.graphql';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
    private apollo: Apollo
    ) { }

  all(): Observable<Category[]> {
    return this.apollo.query({
      query: categoriesQuery
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.categories)
    );
  }

  create(category: Category): Observable<Category> {
    return this.apollo.mutate({
      mutation: createCategoryMutation,
      variables: {
        category
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.insert_categories.returning[0])
    );
  }

  update(category: Category): Observable<Category> {
    return this.apollo.mutate({
      mutation: updateCategoryMutation,
      variables: {
        id: category.id.toString(),
        category
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.update_categories.returning[0])
    );
  }

  delete(id: string): Observable<Category> {
    return this.apollo.mutate({
      mutation: deleteCategoryMutation,
      variables: {
        id,
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.delete_categories.returning[0])
    );
  }
}
