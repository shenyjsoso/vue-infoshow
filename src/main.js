import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {
  size: 'small'
});

import moment from 'moment' //时间格式化插件
Vue.prototype.$moment = moment; //赋值使用

import aadata from './components/reports/aa-data.js'
Vue.prototype.$aadata = aadata

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//自定义组件全局引入
import Hy from '@/components/hy/index.js'
Vue.use(Hy)

import { formatDate } from '@/assets/utils.js'
Vue.prototype.$formatDate = formatDate

//请求封装
import ajax from '@/ajax/index.js'
Vue.prototype.$ajax = ajax

//配置各个浏览器样式兼容
import '@/assets/css/normalize.css'
import '@/assets/css/main.css'

// 引入样式
import '@/assets/css/pagination.css'
import '@/assets/css/table.less'
import '@/assets/css/select.css'
import '@/assets/css/check.css'
import '@/assets/css/common.less'

import './assets/font/iconfont.css'
const sysTitle = 'CDR4.0'
Vue.prototype.$sysTitle = sysTitle
router.beforeEach((to,form, next) => {
 
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = `${sysTitle} - ${to.meta.title}`
  }
  next()
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')