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
  return (
    <div className={styles.box}>
      <h2>No argument</h2>
      {loading ? <div>loading</div> : <ul>{data.tradePools.map(({ token1, price, poolId, state }: { token1: string; price: string; poolId: number; state: number }, index: number) => {
        return <li key={index}>
          <p>token1: {token1}</p>
          <p>poolId: {poolId}</p>
          <p>state: {state}</p>
          <p>price: {price}</p>
        </li>
      })}</ul>}
    </div>
  );
}
