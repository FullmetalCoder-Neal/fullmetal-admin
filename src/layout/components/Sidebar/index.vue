<template>
  <div class="flex-col">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <div class="support">
      <p style="text-align: center; font-size: 13px; margin: 10px 0 0; font-weight: 700;">技术支持</p>
      <p style="margin: 5px 0 0; font-size: 12px;text-align: center;line-height:1.5;">上海平衢信息科技有限公司<br>联系电话：13564199126&nbsp;&nbsp;&nbsp;</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.support {
  height: 80px;
  border-top: solid 1px $menuBg
}
</style>
