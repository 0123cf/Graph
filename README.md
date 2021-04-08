# Graph Demo project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

# Graph教程

## 主入口设置
```tsx
import { IRouteComponentProps } from 'umi';

import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  uri: '',     // bsc test
  cache: new InMemoryCache(),
})

export default function Layout ({ children }: IRouteComponentProps) {
  return <ApolloProvider client={client}>
      {children}
  </ApolloProvider>
}
```

## 具体页面使用

```tsx
import { QueryTradePools } from '@/utils/apollo';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import styles from './index.less';

export default function Demo1 () {
  const { loading, error, data } = useQuery(QueryTradePools)
  if (error) return <p>Query Error ~~(</p>
  useEffect(() => {
    if (!loading) {
      console.log(data)
    }
  }, [loading])
  return ...
}

```

## 详见demo
src/pages/index.tsx