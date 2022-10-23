import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'

Vue.use(Router)
const router = new Router({
  /* routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
      //component: home
    }
  ] */
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login }, //定义访问页面的路由地址
    { 
      path: '/home',
      component: () => import('@/views/home.vue'),
      redirect: '/guanli',
      children: [
        { path: '/guanli', component: () => import('@/views/guanli.vue') }
      ]
    }
  ]

})

//挂载路由导航守卫
//to是我们跳转的路径，from是来自的路径，next为放行函数
router.beforeEach((to, from, next) => {
  //如果用户访问登录页，直接放行
  if (to.path === "/login") return next();
  //从sessionStorage中获取到保存的token值
  const tokenStr = window.localStorage.getItem("token");
  //没有token，强制跳转到登录页面
  if (!tokenStr) return next("/login");
  next();//有token，直接放行
})


export default router