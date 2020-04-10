export { CoreStateModule } from './lib/core-state.module';

// Products
export * from './lib/products/products.actions';
export * from './lib/products/products.facade';
export { productsReducer, ProductsState } from './lib/products/products.reducer';
export { getAllProducts, getSelectedProduct } from './lib/products/products.selectors';

// Categories
export * from './lib/categories/categories.actions';
export * from './lib/categories/categories.facade';
export { categoriesReducer, CategoriesState } from './lib/categories/categories.reducer';
export { getAllCategories, getSelectedCategory } from './lib/categories/categories.selectors';
