import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login'
import Products from '@/components/pages/products'
import Dashboard from '@/components/dashboard'
import CustomerOrder from '@/components/pages/customerorders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
      ],
    },

    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
      ],
    },
  ]
})
