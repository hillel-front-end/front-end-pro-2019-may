import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Admins from './views/Admins'
import foo1 from './views/AdminsChildren/foo1'
import foo2 from './views/AdminsChildren/foo2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/about',
      component: About
    },
    {
      path:'/admins',
      component: Admins,
      children: [
        {
          path:'gallery',
          component: foo1
        },
        {
          path:'contacts',
          component: foo2
        },
      ]
    },
    {
      path:'*',
      component: Home
    },
  ]
})
