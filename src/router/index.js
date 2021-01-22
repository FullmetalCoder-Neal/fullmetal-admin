import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name for dynamic addRouter and title (must set)
    noCache: true                if set true, the page will no be cached(default is false)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
    affix: true                  if set true, the tag will affix in the tags-view
    noTag: true                  if set true, the router won't open a tag
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: 'Home', affix: true }
      }
    ]
  },
  {
    path: '/nests',
    component: Layout,
    redirect: '/menu1',
    meta: { title: 'Nests' },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nests/menu1'),
        name: 'Menu1',
        meta: { title: 'Menu1' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nests/menu2'),
        name: 'Menu2',
        meta: { title: 'Menu2' }
      },
      {
        path: 'menu3',
        component: () => import('@/views/nests/menu3'),
        name: 'Menu3',
        meta: { title: 'Menu3', noTag: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/form',
    component: Layout,
    redirect: '/form/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/form/index'),
        name: 'Form',
        meta: { title: 'Form' }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/table/index'),
        name: 'Table',
        meta: { title: 'Table' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
