<template>
  <div class="app-main" :class="{ 'navbar-fixed': showNavbar }">
    <!-- 可以选择隐藏掉 -->
    <Navbar v-if="showNavbar" />
    <AppMain />
    <Tabbar />
  </div>
</template>

<script>
import { Navbar, AppMain, Tabbar } from './commponents'
import defaultSettings from '@/settings.js'
export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    Tabbar
  },
  data() {
    return {
      // 是否显示顶部的导航栏
      showNavbar: defaultSettings.showNavbar,
    }
  },

}
</script>
<style lang="scss">
.navbar-fixed {
  padding-top: 46px;
}
</style>
