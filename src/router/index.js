import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Auth/Login'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'
import Editor from '@/pages/Editor/Editor.vue'

Vue.use(Router)
const authRoutes = [
  { path: '/login', name: 'Login', component: Login }
]

const privateRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/editor',
    name: 'Crossword Editor',
    component: Editor,
    meta: {
      requiresAuth: false
    }
  }
]
const routes = authRoutes.concat(privateRoutes)
export default new Router({
  routes
})
