import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login'
import Index from '../views/index.vue'
import Home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
    },{
      path: '/login',
      name: 'login',
      component: Login,
    },{
      path: '/home',
      component: Index,
      children: [{
        path: '',
        component: Home,
        meta: [''],
      }]
    }
  ]
})
