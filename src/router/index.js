import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login'
import Register from '@/components/pages/register'
import ForgotPassword from '@/components/pages/forgotpassword'
import Products from '@/components/pages/products'
import Coupons from '@/components/pages/Coupons';
import Orders from '@/components/pages/Orders';
import OrderInfoCheck from '@/components/pages/orderinfocheck';
import Dashboard from '@/components/dashboard'
import CustomerOrder from '@/components/pages/customerorders'
import CustomerCheckout from '@/components/pages/customercheckout'

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
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: ForgotPassword,
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
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
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
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
        {
          path: 'order_info_check',
          name: 'OrderInfoCheck',
          component: OrderInfoCheck,
        },
      ],
    },
  ]
})
