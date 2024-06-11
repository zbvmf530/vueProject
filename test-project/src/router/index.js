import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import NestedComponent from '../views/NestedComponent.vue'
import EmpForm from '../views/EmpForm.vue'
import UpdateEmpForm from '../views/UpdateEmpForm.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    component: UserView
  },
  {
    path: '/employees',
    component:()=>import(/* webpackChunkName: "about"*/'../views/EmpView.vue')
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
    path: '/nested',
    component: NestedComponent
  },
  {
    path: '/empForm',
    name: 'empForm',
    component: EmpForm
  },
  {
    path : '/updateEmpForm',
    name : 'updateEmpForm',
    component: UpdateEmpForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
