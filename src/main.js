import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import store from './store'
import '@/custom-component' // 注册自定义组件

import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/reset.css'

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
