const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  refreshUserInfo: state => state.user.refreshUserInfo,
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}
export default getters
