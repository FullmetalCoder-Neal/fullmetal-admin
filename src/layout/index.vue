<template>
  <div class="layout-wrapper">
    <Banner />
    <UserBar />
    <div :class="classObj" class="app-wrapper flex">
      <sidebar class="sidebar-container" />
      <div class="main-container">
        <div>
          <tags-view />
        </div>
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { Banner, UserBar, TagsView, Sidebar, AppMain } from './components'
export default {
  name: 'Layout',
  components: {
    Banner,
    UserBar,
    TagsView,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.app-wrapper {
  width: 100vw;
  height: calc(100vh - 78px);
  overflow: hidden;
}
</style>
