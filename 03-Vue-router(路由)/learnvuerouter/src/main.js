import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 在Vue类添加一个test方法
Vue.prototype.test = () => {
  console.log('test');
}

Vue.prototype.name = 'zytqyb'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
