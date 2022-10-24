import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import './assets/main.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI, { Message } from 'element-ui'
Vue.use(ElementUI)
import axios from 'axios'
//Vue.prototype.$http = axios
import router from './router/index'
Vue.prototype.$message = Message

//为axios添加请求拦截器
axios.interceptors.request.use(config => {
  console.log(config);
  const token=window.localStorage.getItem('token');
  if (token) {
    //config.headers.Authorization = window.localStorage.getItem('token');
    //config.headers['Authorization'] = 'Bearer ' + token;
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;//最后必须返回config
}, error => {
  console.log(error);
  return Promise.reject(error);
});

Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
