import Vue from 'vue'
import App from './App.vue'
import './plugins/ant-design-vue'
import '@/assets/css/reset.less'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
 