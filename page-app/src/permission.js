import router from './router'
import store from './store'
import defaultSettings from './settings'

// before
router.beforeEach((to, from, next) => {
  // set page title
  document.title = to.meta.title || defaultSettings.title

  // next
  next()
})

// after
router.afterEach((to, from) => {
  // finish
})