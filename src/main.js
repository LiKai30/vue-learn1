import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // es6的包导入，会默认寻找store文件夹下面的index文件，没有再去查找store.js文件
import Bus from './bus'
import Mock from './mock'

// if(process.env.NODE_ENV === 'development'){
//   require('./mock')
// }



Vue.config.productionTip = true
Vue.prototype.$bus = Bus;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
