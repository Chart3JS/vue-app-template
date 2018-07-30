import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Auth/Login'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'
import DeviceDashbord from '@/pages/Dashboard/DeviceDashbord.vue'

Vue.use(Router)
const authRoutes = [
  { path: '/login', name: 'Login', component: Login }
]

const privateRoutes = [
  {
    path: '/',
    redirect: '/device-dashbord',
    name: 'Home',
    component: DeviceDashbord,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/device-dashbord',
    name: 'Devices Dashbord',
    component: DeviceDashbord,
    meta: {
      requiresAuth: true
    }
  }
]
const routes = authRoutes.concat(privateRoutes)
export default new Router({
  routes
})
