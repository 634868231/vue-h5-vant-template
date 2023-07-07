<template>
  <div class="app-tabbar">
    <!-- 当前的路径需要显示底部栏路由 -->
    <div v-if="showTabbar">
      <!-- 使用vant的底部栏组件 -->
      <van-tabbar
        v-model="tabbarIndex"
        :inactive-color="tabbar.color"
        :active-color="tabbar.selectedColor"
      >
        <van-tabbar-item
          v-for="route in tabbarRoutes"
          :key="route.path"
          @click="handleTabbarLink(route.path)"
        >
          <span>{{ route.meta.title }}</span>
          <template #icon="props">
            <img
              :src="
                props.active
                  ? require('@/' + route.meta.selectedIconPath)
                  : require('@/' + route.meta.iconPath)
              "
            />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import util from '@/utils/util.js'
export default {
  name: 'tabbar',
  data() {
    return {
      // 是否显示底部栏
      showTabbar: false,
      // 底部栏切换的下标
      tabbarIndex: 0,
      // 底部栏配置
      tabbar: {
        color: '#909399', // 文字颜色
        selectedColor: '#303133', // 选中文字颜色
        border: false,
      },
    }
  },
  computed: {
    /**
     * 解析路由配置，筛选出底部栏的路由
     */
    tabbarRoutes() {
      let tabbarRoutes = [];
      console.log('this.$router.options.routes', this.$router.options.routes)
      this.$router.options.routes.forEach(v => {
        if (!v.hidden && v.children) {
          tabbarRoutes.push(v)
        }
      })
      return tabbarRoutes
    }
  },
  watch: {
    $route(to, from) {
      // 路由发生改变的时候判断当前路径是否是底部栏的路由
      this.hasTabbarRoutes();
    },
  },
  created() {
    // 路由发生改变的时候判断当前路径是否是底部栏的路由
    this.hasTabbarRoutes();
  },
  methods: {
    /**
     * 路由发生改变的时候判断当前路径是否是底部栏的路由
     */
    hasTabbarRoutes() {
      let currentPath = this.$route.path;
      this.showTabbar = false; // 默认隐藏
      for (let index in this.tabbarRoutes) {
        // 当前路由包含在配置中，显示底部栏，并选中
        if (this.tabbarRoutes[index] && (this.tabbarRoutes[index].redirect === currentPath)) {
          this.showTabbar = true;
          this.tabbarIndex = Number(index);
          return;
        }
      }
    },
    /**
     * 点击底部栏路由跳转
     */
    handleTabbarLink(url) {
      this.$router.push({
        path: url
      })
    },
  }
}
</script>

