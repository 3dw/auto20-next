import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//引入i18n
import { createI18n } from 'vue-i18n'
import enLocale from './en/index'
import zhLocale from './zh/index'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/qr/:uid',
    name: 'qr',
    component: () => import(/* webpackChunkName: "qr" */ '../views/QR.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/link',
    name: 'link',
    component: () => import(/* webpackChunkName: "about" */ '../views/LinkView.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import(/* webpackChunkName: "notifications" */ '../views/NotificationsView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import(/* webpackChunkName: "privacy-policy" */ '../views/PrivacyPolicyView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
  {
    path: '/flag/:uid',
    name: 'Flag',
    component: () => import(/* webpackChunkName: "flag" */ '../views/FlagView.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FriendsView.vue')
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import(/* webpackChunkName: "maps" */ '../views/MapsView.vue')
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import(/* webpackChunkName: "groups" */ '../views/GroupsView.vue')
  },
  {
    path: '/group/:idx',
    name: 'group',
    component: () => import(/* webpackChunkName: "groups" */ '../views/GroupView.vue')
  },
  {
    path: '/book',
    name: 'book',
    component: () => import(/* webpackChunkName: "book" */ '../views/BookView.vue')
  },
  {
    path: '/polis',
    name: 'polis',
    component: () => import(/* webpackChunkName: "plois" */ '../views/PolisView.vue')
  },
  {
    path: '/source_github',
    name: 'source_github',
    component: () => import(/* webpackChunkName: "plois" */ '../views/Source_github.vue')
  }  
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//export default router


//创建i18n对象
export const i18n = createI18n({
  locale:localStorage.getItem('lang') || "zh", //默认显示的语言 
  fallbackLocale: localStorage.getItem('lang') || "zh",//预设语言环境
  globalInjection: true, //全局生效$t
  legacy:false,
  messages:{
    zh: zhLocale,
    en: enLocale,
  }
})

//export default i18n
