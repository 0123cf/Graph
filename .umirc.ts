import { defineConfig } from 'umi';

export default defineConfig({
  base: '/React-Graph-Demo/dist',
  publicPath: './dist/',
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
