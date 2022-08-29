import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  DefaultOptions,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { SubscriptionClient } from 'subscriptions-transport-ws';
// Apollo
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createClient } from 'graphql-ws';
import { CONFIGS } from '../models';

const { APOLLO_HOST_URL } = CONFIGS;
const isLocal = APOLLO_HOST_URL.includes('localhost') ? '' : 's';

// const basic = setContext((operation, context) => ({
//   headers: {
//     Accept: 'charset=utf-8'
//   }
// }));
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

// const wsLink = new WebSocketLink({
//   uri: `ws${isLocal}://${APOLLO_HOST_URL}`,
//   options: {
//     reconnect: true,
//   },
// });
const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws${isLocal}://${APOLLO_HOST_URL}`,
  })
);

function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const auth = setContext((operation, context) => {
    // const token = localStorage.getItem('token');
    const token = '';
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmExODE0NTQyOWFlM2QwOGU2MTA2ZSIsInJvbGUiOiJBZG1pbiIsImFkZHJlc3MiOiIxMjMgQWNlIiwicGhvbmUiOiIrODQ4MTk1NDE4OTciLCJpc1ZlcmlmaWVkIjpmYWxzZSwic2lnblVwRGF0ZSI6IjIwMjItMDQtMjhUMDQ6Mjk6MDguNDk3WiIsImlhdCI6MTY1MjQzMjIxMCwiZXhwIjoxNjUyNDM1ODEwfQ.feB2KTTD5eLDVVtNvsZkylbE7iNIm2Q5q0yehiLr5lU';

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          'access-token': `${token}`,
        },
      };
    }
  });

  const link = ApolloLink.from([
    // basic,
    wsLink,
    auth,
    httpLink.create({
      uri: `http${isLocal}://${APOLLO_HOST_URL}`,
    }),
  ]);

  return {
    link,
    cache: new InMemoryCache({
      addTypename: false,
    }),
    defaultOptions,
    name: 'web',
    version: '0.0.1',
  };
}

@NgModule({
  exports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
