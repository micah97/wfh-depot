import gql from 'graphql-tag';

export const productsFragment = gql`
  fragment productsFragment on product {
    id
    name
    description
    price
    categoryId
    category {
      id
      name
    }
    quantityInStock
  }
`;

export const productsQuery = gql`
  query productsQuery {
    product {
      ...productsFragment
    }
  }
  ${productsFragment}
`;

export const createProductMutation = gql`
  mutation creatProductMutation($product: [product_insert_input!]!) {
    insert_product(objects: $product) {
      returning {
        ...productsFragment
      }
    }
  }
  ${productsFragment}
`;

export const updateProductMutation = gql`
  mutation updateProductMutation($id: uuid, $product: product_set_input) {
    update_product(where: {id: {_eq: $id}}, _set: $product) {
      returning {
        ...productsFragment
      }
    }
  }
  ${productsFragment}
`;

export const deleteProductMutation = gql`
  mutation deleteProductMutation($id: uuid) {
    delete_product(where: {id: {_eq: $id}}) {
      returning {
        ...productsFragment
      }
    }
  }
  ${productsFragment}
`;
