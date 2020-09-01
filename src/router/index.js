import VueRouter from 'vue-router'
import Vue from 'vue'

const originalPush = VueRouter.prototype.push
const VueRouterReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch((err) => err)
}

Vue.use(VueRouter)

const Home = () => import('components/Home/Home')
const Shop = () => import('components/Shop/Shop')
const Login = () => import('components/Page/Login')
const Good = () => import('components/Shop/Good.vue')

const routes = [
  {
    path: '',
    // redirect: '/home'
    // component: Home
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '用户登录',
    },
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      title: '商城',
    },
    children: [],
  },
  {
    path: '/goods',
    name: 'good',
    component: Good,
    meta: {
      title: '商品详情',
    },
    props: true,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

// 前置钩子
router.beforeEach((to, from, next) => {
  console.log(to)
  let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
  if (to.path.match(reg)) {
    window.location.href = to.path.slice(1)
  } else {
    document.title = to.matched[0].meta.title
    next()
  }
})

export default router
