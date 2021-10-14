import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: () => import(/* webpackChunkName: "welcome" */ "../components/Welcome") },
      { path: '/userslist', component: () => import(/* webpackChunkName: "userlist" */ "../components/User/UsersList") },
      { path: '/goodsadd', component: () => import(/* webpackChunkName: "goodsadd" */ "../components/Goods/GoodsAdd") },
      { path: '/goodscount', component: () => import(/* webpackChunkName: "goodscount" */ "../components/Goods/GoodsCount") },

    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import( /* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  } 
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const isToken = sessionStorage.elementToken ? true : false;

  if( to.path == '/login' || to.path == '/register'){
    next();
  }else{
    isToken ? next() : next('/login');
  }
})

export default router
