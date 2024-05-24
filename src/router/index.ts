import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/polis',
    name: 'polis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "polis" */ '../views/PolisView.vue')
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
    path: '/my_place',
    name: 'my_place',
    component: () => import(/* webpackChunkName: "myplace" */ '../views/MyPlace.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
