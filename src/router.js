import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
 // base: process.env.BASE_URL,
  base: 'dashboard',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/browser',
      name:'browser',
      component:()=>import("./views/Browser.vue")
    },
    {
      path:'/os',
      name:'os',
      component:()=>import("./views/Os.vue")
    },
    {
      path:'/city',
      name:'city',
      component:()=>import("./views/City.vue")
    },
    {
      path:'/country',
      name:'country',
      component:()=>import("./views/Country.vue")
    }
]
   
})
