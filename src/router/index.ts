import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/qr/:uid',
    name: 'qr',
    component: () => import(/* webpackChunkName: "qr" */ '../views/QR.vue')
  },
  {
    path: '/about',
    name: 'about',
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
  history: createWebHistory(), // 改為 history 模式
  routes
})

//export default router
