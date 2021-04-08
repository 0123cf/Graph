import styles from './index.less';
import Demo1 from './_demo1'
import Demo2 from './_demo2'
import { Tabs } from 'antd'
import 'antd/dist/antd.css'
const { TabPane } = Tabs;

export default function IndexPage () {
  return (
    <div className={styles.box}>
      <h1>Request data Demo</h1>
      <div className={styles.explain}>
        <p>
          Once your ApolloProvider is hooked up, you're ready to start requesting data with useQuery. useQuery is a React hook that use the Hooks API to share GraphQL data with your UI.
        </p>
        <p>
        First, pass your GraphQL query (wrapped in the gql function) to the useQuery hook. When your component renders and the useQuery hook runs, a result object is returned that contains loading, error, and data properties:
        </p>
        <p>
          Apollo Client tracks error and loading state for you, which are reflected in the loading and error properties.
        </p>
        <p>
          When the result of your query comes back, it's attached to the data property.
        </p>
        {/* <a href="https://www.apollographql.com/docs/react/get-started/">More to www.apollographql.com</a> */}
      </div>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Demo1" key="1">
          <Demo1 />
        </TabPane>
        <TabPane tab="Demo2" key="2">
          <Demo2 />
        </TabPane>
      </Tabs>
    </div>
  );
}
