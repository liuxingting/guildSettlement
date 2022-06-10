import "./styles/common.css";
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import rules from './utils/formCheck.js'

import router from './router'
import store from './store'
Vue.use(ElementUI);


// 全局方法正则挂载
Vue.prototype.$rules = rules

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
