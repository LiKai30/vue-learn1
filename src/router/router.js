/**
 * 方便管理
 */

import Home from '../views/Home.vue';


export default [
  {
    path: '/',
    name: 'home',
    component: Home,     
    // 路由独享守卫
    beforeEnter:(to, from, next) => {

    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // 路由懒加载
    component: () => import('../views/About.vue'),
    props: {
      food: 'rice' // 传递给about的参数
    },
    meta: {  // 路由元信息
      title: '关于' // 修改网页tab页面标题
      // 还可以自定权限
    }
  },
  // 动态路由匹配, 可以实现组件的复用，根据不同的参数传入，显示不同的内容；
  {
    path: '/argus/:name', // name即动态输入的参数
    name: 'argus',
    component: () => import('../views/Argus.vue')
  },

  // 进阶用法，使用路由组件传参1
  {
    path: '/argu/:name', // name即动态输入的参数
    name: 'argu',
    component: () => import('../views/Argus.vue'),
    props: true // 参数当作组件的属性
  },
  // 无动态参数2 见about
  // 函数形式 3 见home_page

  // 嵌套路由
  {
    path: '/parent', 
    name: 'parent',
    component: () => import('../views/Parent.vue'),
    children: [
      {
        path: 'child', // 父级不需要写/？ 
        name: 'child',
        component: () => import('../views/Child.vue')
      }
    ]
  },

  // 命名路由+ 命名视图
  {
    path: '/named_view',
    components: { // 别忘了s
      default: () => import('../views/Parent.vue'), // 无name的时候加载
      email: () => import('../views/Email.vue'),
      tel: () => import('../views/Tel.vue'),
    } 
    
  },

  // 路由重定向
  {
    path: '/main', 
    redirect: '/',
    // 或者命名路由
    // { name: 'home'}
    // 还可以使用方法, to是要去的路由，必须返回一个字符串路径或者路由对象
    // to => { return { name: 'home'}}
  },

  // 别名,不同的名字访问相同页面
  {
    path: '/home',
    alias: '/home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    }) 
  },
  {
    path:'/store',
    component: () => import('../views/store.vue'),
    // children: [
    //   {
    //     path: 'child', // 父级不需要写/？ 
    //     name: 'child',
    //     component: () => import('../views/Child.vue')
    //   }
    // ]
  },





  // 必须放在最后，就近匹配原则
  {
    path: '*',  // 匹配任何页面，防止找不到
    component: () => import('../views/notFound.vue')
  } 

  
]
