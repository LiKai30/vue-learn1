import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

// 简单模拟
const HAS_LOGINED = true;

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // to和from代表路由对象
  to.meta && setTitle(to.meta.title);
  // 在这进行登陆状态处理
  if(to.name !== 'login') {
    if (HAS_LOGINED) next();
    else next({ name: 'login'});
  }else {
    if (HAS_LOGINED) next({ name: 'home' });
    else next();
  }
})

// 在导航被确认之前 ？？？
// router.beforeResolve();

// 后置钩子:  loading状态清楚
router.afterEach((to, from) => {

})
  // to和from代表路由对象
export default router
