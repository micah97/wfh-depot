import gql from 'graphql-tag';

export const categoriesFragment = gql`
  fragment categoriesFragment on categories {
    id
    name
    products {
      id
      name
      price
    }
  }
`;

export const categoriesQuery = gql`
  query categoriesQuery {
    categories {
      ...categoriesFragment
    }
  }
  ${categoriesFragment}
`;

export const createCategoryMutation = gql`
  mutation createCategoryMutation($category: [categories_insert_input!]!) {
    insert_categories(objects: $category) {
      returning {
        ...categoriesFragment
      }
    }
  }
  ${categoriesFragment}
`;

export const updateCategoryMutation = gql`
  mutation updateCategoryMutation($id: Int, $category: categories_set_input) {
    update_categories(where: {id: {_eq: $id}}, _set: $category) {
      returning {
        ...categoriesFragment
      }
    }
  }
  ${categoriesFragment}
`;

export const deleteCategoryMutation = gql`
  mutation deleteCategoryMutation($id: Int) {
    delete_categories(where: {id: {_eq: $id}}) {
      returning {
        ...categoriesFragment
      }
    }
  }
  ${categoriesFragment}
`;
