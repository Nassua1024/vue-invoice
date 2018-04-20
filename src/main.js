// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible/flexible';
import { get } from '@/utils/http';

import { Switch } from 'element-ui';

Vue.use(Switch);

Vue.config.productionTip = false;
Vue.prototype.$get = get;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
