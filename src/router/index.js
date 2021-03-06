import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login'
import Index from '../views/index.vue'
import Home from '../views/home'

import Basictable from '../views/tables/basic'
import Fixedheadertable from '../views/tables/fixedheader'
import BasicNeedForm from '../views/forms/basicNeed'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: 'login',
  }, {
    path: '/login',
    name: 'login',
    component: Login,
  }, {
    path: '/home',
    component: Index,
    children: [{
      path: '',
      component: Home,
      meta: ['Dashboard'],
    }]
  }, {
    path: '/tables',
    name: 'tables',
    redirect: 'tables/basic',
    component: Index,
    children: [
      {
        path: 'basic',
        name: 'basic',
        component: Basictable,
        meta: ['基础表格'],
      },
      {
        path: 'fixedheader',
        name: 'fixedheadertable',
        component: Fixedheadertable,
        meta: ['固定标头表格']
      }
    ]
  },{
      path: '/forms',
      name: 'forms',
      redirect: 'forms/basicneed',
      component: Index,
      children: [
        {
            path: 'basicneed',
            name: 'BasicNeed',
            component: BasicNeedForm,
            meta: ['基本需求表单']
        }
      ]
  }, {
    path: '*',
    redirect: 'home'
  }]
})
