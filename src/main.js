// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' //第三方套件放上面
import VeeValidate from 'vee-validate';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n';Vue.use(VueI18n);


import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

VeeValidate.Validator.localize('zh_TW', zhTWValidate);
Vue.use(VeeValidate,{
  events: 'input|blur'}
 );

 

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next);

  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;

      axios.post(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
            next();
        } else
        {
          next({
            path: '/login'
          })
        }
      });
  } else {
    next();
  }

;})