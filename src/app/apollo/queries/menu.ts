import { gql } from 'apollo-angular';

export const MENU = gql`
  query menu {
    menu {
      id
      title
      name
      rating
      price
      quantityType
      createdAt
      image
    }
  }
`;
