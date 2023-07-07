<template>
  <div class="app-navbar">
    <van-nav-bar fixed="">
      <template #left>
        <van-icon name="arrow-left" size="20" @click="handleBack" />
      </template>
      <template #title>
        {{ pageTitle }}
      </template>
      <template #right>
        <van-icon name="wap-home-o" size="20" @click="handleToHome" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import defaultSettings from '@/settings.js'

export default {
  name: 'Navbar',
  data() {
    return {
      pageTitle: defaultSettings.title,
    }
  },
  watch: {
    $route(to, from) {
      this.pageTitle = to.meta.title;
    }
  },
  created() {
    this.pageTitle = document.title;
  },
  methods: {
    /**
     * 点击左上角返回按钮
     */
    handleBack() {
      if (window.history.length <= 1) {
        let url = this.$route.matched[0].redirect
        this.$router.push({
          path: url
        });
      } else {
        this.$router.go(-1);
      }
    },
    /**
     * 跳转到首页
     */
    handleToHome() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

