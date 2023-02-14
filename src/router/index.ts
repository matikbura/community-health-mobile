import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '~/layout/index.vue'


export const routes = [

  {
    path: '/task-list',
    name: 'task',
    component: Layout,
    redirect: '/task-list/index',
    meta: { title: '任务管理', icon: 'todo-list-o', isTag: true, isHead:true },
    children: [
      {
        path: 'index',
        name: 'taskList',
        component: () => import('~/views/task-list/index.vue'),
        meta: { title: '任务列表', isHead:true, isBack:false }
      }
    ]
  },
  {
    path: '/leave_permit-list',
    name: 'leave_permit',
    component: Layout,
    redirect: '/leave_permit-list/index',
    meta: { title: '假条', icon: 'records', isTag: true, isHead:true },
    children: [
      {
        path: 'index',
        name: 'leavePermit',
        component: () => import('~/views/leave-permit-list/index.vue'),
        meta: { title: '假条列表', isHead:true, isBack:false }
      }
    ]
  },
  {
    path: '/sanitary-apparatus-list',
    name: 'sanitary-apparatus',
    component: Layout,
    redirect: '/sanitary-apparatus-list/index',
    meta: { title: '器械', icon: 'setting-o', isTag: true, isHead:true },
    children: [
      {
        path: 'index',
        name: 'sanitaryApparatus',
        component: () => import('~/views/sanitary-apparatus-list/index.vue'),
        meta: { title: '器械列表', isHead:true, isBack:false }
      }
    ]
  },
  {
    path: '/add-task',
    name: 'addTask',
    component: Layout,
    redirect: '/add-task/index',
    meta: { title: '添加任务', icon: 'add-task-o', isHead:true },
    children: [
      {
        path: 'index',
        name: 'addTask',
        // @ts-ignore
        component: () => import('~/views/add-task/index.vue'),
        meta: { title: '添加任务', icon: 'add-task-o' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: { title: '登录', icon: 'home-o' }
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home',
    meta: { title: '我的', icon: 'home-o', isTag: true },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('~/views/home/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to: any, from, next) => {
  next()
})
router.afterEach((to, from) => {

})

export const routerList = routes.find((item: any) => item.name === 'dashboard')?.children
export default router
