import { defineConfig } from 'umi';

export default defineConfig({
  base: '/dist',
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
