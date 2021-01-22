import { asyncRoutes, constantRoutes } from '@/router'

/**
 * @description: 处理后端返回的权限数据，便于生成router
 * @param {*} permitSet
 * @return {*}
 */
function getRouterPermits(permitSet) {
  return permitSet.filter(item => {
    return item.includes(':view')
  }).map(item => {
    const tmp = item.split(':')
    if (tmp.length === 2) {
      return tmp[0].toLowerCase()
    } else {
      return tmp[1].toLowerCase()
    }
  })
}

/**
 * Use meta.role to determine if the current user has permission
 * @param routerPermits
 * @param route
 */
function hasPermission(routerPermits, route) {
  if (route.meta && route.meta.title) {
    const routeName = route.meta.title.toLowerCase()
    return routerPermits.includes(routeName)
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param permitSet
 */
export function filterAsyncRoutes(routes, permitSet) {
  const res = []
  const routerPermits = getRouterPermits(permitSet)
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(routerPermits, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permitSet)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, permitSet) {
    return new Promise(resolve => {
      const accessedRoutes = filterAsyncRoutes(asyncRoutes, permitSet)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
