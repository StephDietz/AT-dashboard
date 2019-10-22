import Vue from 'vue';
import App from './App.vue';

import '@/assets/css/tailwind.less';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
