// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/element/index'
import 'lib-flexible/flexible'
import { store } from '@/vuex/index'
import { ajax } from '@/utils/http'
import '@/assets/less/base.less'
import '@/assets/less/reset.less'

Vue.config.productionTip = false
Vue.prototype.$axios = ajax

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
