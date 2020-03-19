//导入vue-router
import VueRouter from 'vue-router'
//导入Vue
import Vue from 'vue'
//导入 login组件
import Login from '../views/login/index'
//导入 useElement 组件
import UseElement from '../views/useElement/index.vue'
Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/useElement', component: UseElement }
    ]
})

export default router