import { IRouteComponentProps } from 'umi';

import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/winless/bouncenft2',     // bsc test
  cache: new InMemoryCache(),
})

export default function Layout ({ children }: IRouteComponentProps) {
  return <ApolloProvider client={client}>
      {children}
  </ApolloProvider>
}