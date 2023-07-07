import Vue from 'vue';
import VueRouter from 'vue-router';

// 防止请求当前路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// use vue-router
Vue.use(VueRouter)


/* Layout */
import Layout from '@/layout'

// constantRoutes
const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
  },

  // home
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    meta: {
      title: '首页',
      iconPath: 'assets/tabbar/home.png',
      selectedIconPath: 'assets/tabbar/home_selected.png',
    },
    children: [{
      path: 'index',
      component: () => import('@/views/home/index'),
      meta: {
        title: '首页'
      }
    }]
  },

  // buy
  {
    path: '/buy',
    component: Layout,
    redirect: '/buy/index',
    meta: {
      title: '申请',
      iconPath: 'assets/tabbar/buy.png',
      selectedIconPath: 'assets/tabbar/buy_selected.png',
    },
    children: [{
      path: 'index',
      component: () => import('@/views/buy/index'),
      meta: {
        title: '申请'
      }
    }]
  },

  // my
  {
    path: '/my',
    component: Layout,
    redirect: '/my/index',
    meta: {
      title: '我的',
      iconPath: 'assets/tabbar/my.png',
      selectedIconPath: 'assets/tabbar/my_selected.png',
    },
    children: [{
      path: 'index',
      component: () => import('@/views/my/index'),
      meta: {
        title: '我的'
      }
    }]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history', // hash or history
  base: '/app/', // 路径访问加前缀的时候需要配置，需和vue.config.js中publicPath配置一样
  routes: constantRoutes
})

// reset router
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router
