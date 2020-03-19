//导入了Vue
import Vue from 'vue'
//导入了App.Vue
import App from './App.vue'
//导入了elementui
import Element from 'element-ui'
//导入了elementui 的样式
import 'element-ui/lib/theme-chalk/index.css'
//导入了 router
import router from './router'
//导入了全局样式
import './style/index.css'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
