import { gql } from 'apollo-angular';

export const ADD_FOOD = gql`
  mutation addFood($input: [AddFoodInput]!) {
    addFood(input: $input) {
      isSuccess
      message
    }
  }
`;
