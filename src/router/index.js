import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import ConditionsQuery from '../views/ConditionsQuery.vue'
import ConditionsQueryPage from '../views/ConditionsQueryPage.vue'
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/conditionsquerypage',
  },
  {
    path: '/homeother',
    redirect: '/homeother/mjz',
  },
  ,
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/conditionsquerypage',
    name: 'conditionsquerypage',
    component: ConditionsQueryPage,
  },
  {
    path: '/conditionsquery',
    name: 'conditionsquery',
    component: ConditionsQuery,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('路由守卫');
      //没有用户id回到搜索页
      if (!sessionStorage.getItem('userid')) next({ name: 'conditionsquery' })
        else next()
    },
    children: [

      {
        path: '/homeother/:type',
        name: 'homeother',
        component: () => import( /* webpackChunkName: "about" */ '../views/HomeOther.vue'),
        props: true
      },
      {
        path: '/homeinfo',
        name: 'homeinfo',
        component: () => import( /* webpackChunkName: "about" */ '../views/HomeInfo.vue'),
      },
      {
        path:'/maintenance',
        name: 'maintenance',
        component: () => import( /* webpackChunkName: "about" */ '../views/Maintenance.vue'),
      },
      {
        path:'/Collection',
        name:'collection',
        component: () => import( /* webpackChunkName: "about" */ '../views/Collection.vue'),
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import( /* webpackChunkName: "about" */ '../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router