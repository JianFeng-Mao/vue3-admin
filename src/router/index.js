import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout/index';

export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: '首页' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', affix: true }
      }
    ]
  },
  {
    path: '/form',
    name: 'Form',
    component: Layout,
    meta: { title: '表单' },
    redirect: 'normalForm',
    children: [
      {
        path: 'normalForm',
        name: 'NormalForm',
        component: () => import('@/views/form/normalForm'),
        meta: { title: '普通表单' }
      },
      {
        path: 'validateForm',
        name: 'ValidateForm',
        component: () => import('@/views/form/validateForm'),
        meta: { title: '验证表单' }
      }
    ]
  },
  {
    path: '/tabsManage',
    name: 'TabsManage',
    redirect: 'tabs',
    component: Layout,
    meta: { title: '标签管理' },
    children: [
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import('@/views/tabs/index'),
        meta: { title: '标签页' }
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    component: Layout,
    meta: { title: '表格' },
    redirect: 'normalTable',
    children: [
      {
        path: 'normalTable',
        name: 'NormalTable',
        component: () => import('@/views/table/normalTable'),
        meta: { title: '普通表格' }
      },
      {
        path: 'multipleTable',
        name: 'MultipleTable',
        component: () => import('@/views/table/multipleTable'),
        meta: { title: '多选表格' }
      },
      {
        path: '/customTable',
        name: 'CustomTable',
        meta: { title: '自定义表格' },
        redirect: 'columnTable',
        children: [
          {
            path: 'columnTable',
            name: 'ColumnTable',
            component: () => import('@/views/table/custom/columnTable'),
            meta: { title: '自定义列模板' }
          },
          {
            path: 'headTable',
            name: 'HeadTable',
            component: () => import('@/views/table/custom/headTable'),
            meta: { title: '自定义表头' }
          }
        ]
      },
      {
        path: '/operationTable',
        name: 'OperationTable',
        component: () => import('@/views/table/operationTable'),
        meta: { title: '操作表格' }
      }
    ]
  },
  {
    path: '/treeManage',
    name: 'TreeManage',
    redirect: 'tree',
    component: Layout,
    meta: { title: '树形管理' },
    children: [
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '树形控件' }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
