import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
