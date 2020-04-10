export interface Product {
  id: string;
  name: string;
  description?: string;
  price?: number;
  categoryId?: number;
  category?: Category;
  quantityInStock?: number;
}

export interface Category {
  id: string;
  name: string;
  products?: Product[];
}

export type ItemType = Product | Category;
