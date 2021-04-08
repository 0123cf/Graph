import { QueryMarketTradePools } from '@/utils/apollo';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { Menu, Dropdown, Button } from 'antd'

type getpollsVariablesType = {
  contract: string;
  value: string;
  decimals: number;
}
const coinList = [
  { "value": "BNB", "contract": "0x0000000000000000000000000000000000000000", "decimals": 18 },
  { "value": "BUSD", "contract": "0xe9e7cea3dedca5984780bafc599bd69add087d56", "decimals": 18 },
  { "value": "USDT", "contract": "0x55d398326f99059ff775485246999027b3197955", "decimals": 6 },
  { "value": "USDC", "contract": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", "decimals": 18 }
]
export default function Demo1 () {
  const setGetPollsVariables = (v: getpollsVariablesType) => {
    _setGetPollsVariables(v)
  }
  const [getpollsVariables, _setGetPollsVariables] = useState<getpollsVariablesType>(coinList[0])
  const { loading, error, data } = useQuery(QueryMarketTradePools, { variables: getpollsVariables })
  if (error) return <p>Query Error ~~(</p>
  useEffect(() => {
    if (!loading) {
      console.log(data)
    }
  }, [loading])
  const menu = (
    <Menu>
      {coinList.map(e => (<Menu.Item key={e.value} onClick={() => setGetPollsVariables(e)}>{ e.value }</Menu.Item>))}
    </Menu>
  );
  return (
    <div className={styles.box}>
      <h2>Argument variables</h2>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button className={styles.dropdown} onClick={e => e.preventDefault()}>Coin: {getpollsVariables.value}</Button>
      </Dropdown>
      {loading ? <div>loading</div> : <>
        <ul>{data.tradePools.map(({ token1, price, poolId, state }: { token1: string; price: string; poolId: number; state: number }, index: number) => {
        return <li key={index}>
          <p>token1: {token1}</p>
          <p>poolId: {poolId}</p>
          <p>state: {state}</p>
          <p>price: {price}</p>
        </li>
        })}</ul>
        {data?.tradePools.length === 0 && <div>暂无数据</div>}
      </>}
    </div>
  );
}
