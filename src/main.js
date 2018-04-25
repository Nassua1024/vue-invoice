// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible/flexible';
import { ajax } from '@/utils/http';

import { Switch, Button, Message, Row, Col, Input } from 'element-ui';

Vue.use(Switch);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);

Vue.config.productionTip = false;
Vue.prototype.$axios = ajax;
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
