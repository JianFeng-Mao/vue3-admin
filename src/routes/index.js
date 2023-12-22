import Layout from '@/layout';

const { createRouter, createWebHashHistory } = require('vue-router');

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '首页' },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/normalForm',
    meta: { title: '表单管理' },
    children: [
      {
        path: '/normalForm',
        name: 'NormalForm',
        meta: { title: '普通表单' },
        component: () => import('@/views/form/normalForm')
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/normalTable',
    meta: { title: '表格管理' },
    children: [
      {
        path: '/normalTable',
        name: 'NormalTable',
        meta: { title: '普通表格' },
        component: () => import('@/views/table/normalTable')
      },
      {
        path: '/polyTable',
        name: 'PolyTable',
        meta: { title: '多功能表格' },
        redirect: '/multipleTable',
        children: [
          {
            path: '/multipleTable',
            name: 'MultipleTable',
            meta: { title: '多选表格' },
            component: () => import('@/views/table/polyTable/multipleTable')
          }
        ]
      },
      {
        path: '/custom',
        name: 'Custom',
        meta: { title: '自定义表格' },
        redirect: '/columnTable',
        children: [
          {
            path: '/columnTable',
            name: 'ColumnTable',
            component: () => import('@/views/table/custom/columnTable'),
            meta: { title: '自定义列模板' }
          },
          {
            path: '/headTable',
            name: 'HeadTable',
            component: () => import('@/views/table/custom/headTable'),
            meta: { title: '自定义表头' }
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
});

export default router;
