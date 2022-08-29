export interface MutationResponse {
  isSuccess?: boolean;
  data?: any;
  message?: string;
}

export enum ROUTING_ENUMS {
  YOUR_PAGE = 'your-page',
  NEW_FEEDS = 'home',
  LOGIN = 'login',
  CREATE_POST = 'create-post',
  DATA_VISUAL = 'data-visual'
}

export const CONFIGS = {
  // APOLLO_HOST_URL: 'http://localhost:27017/graphql',
  APOLLO_HOST_URL: 'retail-store-java.herokuapp.com/graphql',
};
